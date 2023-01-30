import React from "react";
import { sortNodesByDistance, updateNeighbors } from "./helpers";

function dijkstra(board: any, startNode: any, finishNode: any) {
  if (!startNode || !finishNode || startNode === finishNode) return false;

  board[startNode].distance = 0;
  const unvisitedNodes = JSON.parse(JSON.stringify(board))

  while (unvisitedNodes?.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.unshift();
    closestNode.isVisited = true;

    if (closestNode === finishNode) return "success";
    updateNeighbors(closestNode, board);

    // let curNode = getClosestNode(nodes, unvisitedNodes);
    //
    // while (curNode.status === "wall" && unvisitedNodes.length) {
    //   curNode = getClosestNode(nodes, unvisitedNodes);
    // }
    //
    // if (curNode.distance === Infinity) return false;
    //
    // curNode.status = "visited";
    //
    // ;
    //
  }
}