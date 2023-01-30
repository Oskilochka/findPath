import React from "react";
import { Node } from "./Node/Node";
import styles from "./style.module.css";
import { getGridWithWallToggled, getInitialGrid } from "../algorithms/helpers";


export const PathfindingVisualizer = React.memo(() => {

  // todo: rewrite to BoardComponent
  const [ grid, setGrid ] = React.useState<Array<any>>([]);
  const [ isMousePressed, setIsMousePressed ] = React.useState<boolean>(false);

  React.useEffect(() => {
    const initialGrid = getInitialGrid();
    setGrid(initialGrid);

  }, []);

  const mouseDownHandler = (row: any, col: any) => {
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setIsMousePressed(true);
  };

  const mouseEnterHandler = (row: any, col: any) => {
    if (!isMousePressed) return;
    const newGrid = getGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const mouseUpHandler = (row: any, col: any) => {
    setIsMousePressed(false);
  };

  return (
    <div>
      <div>
        <button>Visualize</button>
      </div>
      <div className={styles.grid}>
        {
          grid?.map((row: any, index: number) => {
            return <div key={index}>
              {
                row?.map((node: any, nodeIndex: number) =>
                  <Node isStart={node.isStart} isFinish={node.isFinish} key={nodeIndex} />)
              }
            </div>;
          })
        }
      </div>
    </div>
  );
});