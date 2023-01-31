import React from "react";
import { Node } from "./Node/Node";
import styles from "./style.module.css";
import { FINISH_NODE_COL, FINISH_NODE_ROW, getGridWithWallToggled, getInitialGrid, START_NODE_COL, START_NODE_ROW } from "../algorithms/helpers";
import { dijkstra } from "../algorithms/dijkstra";
import { NodeType } from "../types";

export const PathfindingVisualizer = React.memo(() => {
  const [ grid, setGrid ] = React.useState<NodeType[][]>([]);
  const [ isMousePressed, setIsMousePressed ] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initialGrid = getInitialGrid();
    setGrid(initialGrid);
  }, [ setGrid ]);

  console.log(grid, "grid");

  const mouseDownHandler = (row: number, col: number) => {
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setIsMousePressed(true);
  };

  const mouseEnterHandler = (row: number, col: number) => {
    if (!isMousePressed) return;
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const mouseUpHandler = (row: number, col: number) => {
    setIsMousePressed(false);
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL];
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];

    const visitedNodes = dijkstra(grid, startNode, finishNode);

    console.log(visitedNodes, "visitedNodes");
  };

  return (
    <div>
      <div>
        <button onClick={() => visualizeDijkstra()}>Visualize</button>
      </div>
      <div className={styles.grid}>
        {
          grid?.map((row: NodeType[], index: number) => {
            return <div key={index}>
              {
                row?.map((node: NodeType, nodeIndex: number) =>
                  <Node isStart={node.isStart} isFinish={node.isFinish} key={nodeIndex} />)
              }
            </div>;
          })
        }
      </div>
    </div>
  );
});