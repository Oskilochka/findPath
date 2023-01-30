import React from "react";
import { Node } from "../types";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export function sortNodesByDistance(unvisitedNodes: Node[]) {
  unvisitedNodes.sort((nodeA: Node, nodeB: Node) => nodeA.distance - nodeB.distance);
}

export function getNeighbors(node: Node, grid: Node[][]) {
  const neighbors: Node[] = [];
  const { col, row } = node;

  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors;
}

export function updateNeighbors(node: Node, grid: Node[][]) {
  const neighbors: Node[] = getNeighbors(node, grid);

  for (const neighbor of neighbors) {
    neighbor.distance = node.distance + 1;
  }
}

export function getInitialGrid() {
  const nodes: Node[][] = [];

  for (let row = 0; row < 20; row++) {
    const currentRow: any = [];

    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(row, col));
    }
    nodes.push(currentRow);
  }
  return nodes;
}

export function createNode(col: any, row: any): Node {
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

export function getGridWithWallToggled(grid: Node[][], row: any, col: any) {
  const newGrid = JSON.parse(JSON.stringify(grid));
  const node = newGrid[row][col];
  newGrid[row][col] = { ...node, isWall: !node.isWall };

  return newGrid;
}