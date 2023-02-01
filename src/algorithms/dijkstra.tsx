import React from "react";
import { FINISH_NODE_COL, FINISH_NODE_ROW, getAllNodes, sortNodesByDistance, START_NODE_COL, START_NODE_ROW, updateNeighbors } from "./helpers";
import { NodeType } from "../types";

export function dijkstra(board: NodeType[][], startNode: NodeType, finishNode: NodeType) {
  const visitedNodes = [];

  startNode.distance = 0;

  const unvisitedNodes = getAllNodes(board);

  while (unvisitedNodes?.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode: NodeType = unvisitedNodes.shift() || {
      col: -1,
      row: -1,
      isStart: false,
      isFinish: false,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };

    if (closestNode?.distance === Infinity) return visitedNodes;

    closestNode.isVisited = true;
    visitedNodes.push(closestNode);

    if (closestNode === finishNode) return visitedNodes;
    updateNeighbors(closestNode, board);
  }

  return visitedNodes;

}