import React from "react";
import { sortNodesByDistance, updateNeighbors } from "./helpers";
import { NodeType } from "../types";

export function dijkstra(board: NodeType[][], startNode: NodeType, finishNode: NodeType) {
  const visitedNodes = [];

  startNode.distance = 0;

  const unvisitedNodes = JSON.parse(JSON.stringify(board));

  while (unvisitedNodes?.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();

    closestNode.isVisited = true;
    visitedNodes.push(closestNode);

    if (closestNode === finishNode) return visitedNodes;
    updateNeighbors(closestNode, board);

  }
}