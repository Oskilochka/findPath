import React from "react";
import { NodeType } from "../types";

export const START_NODE_ROW = 10;
export const START_NODE_COL = 10;
export const FINISH_NODE_ROW = 10;
export const FINISH_NODE_COL = 35;

export function sortNodesByDistance(unvisitedNodes: NodeType[]) {
  unvisitedNodes.sort((nodeA: NodeType, nodeB: NodeType) => nodeA.distance - nodeB.distance);
}

export function getNeighbors(node: NodeType, grid: NodeType[][]) {
  const neighbors: NodeType[] = [];
  const { col, row } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(n => !n.isVisited);
}

export function getAllNodes(grid: NodeType[][]) {
  const nodes = [];

  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }

  return nodes;
}

export function updateNeighbors(node: NodeType, grid: NodeType[][]) {
  const neighbors: NodeType[] = getNeighbors(node, grid);

  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

export function getInitialGrid() {
  const nodes: NodeType[][] = [];

  for (let row = 0; row < 20; row++) {
    const currentRow: NodeType[] = [];

    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(row, col));
    }
    nodes.push(currentRow);
  }

  return nodes;
}

export function createNode(row: number, col: number): NodeType {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
}

export function getGridWithWallToggled(grid: NodeType[][], row: number, col: number) {
  const newGrid = JSON.parse(JSON.stringify(grid));
  const node = newGrid[row][col];
  newGrid[row][col] = { ...node, isWall: !node.isWall };

  return newGrid;
}