import React from "react";
import { Node } from "./Node/Node";
import styles from "./style.module.css";
import { getInitialGrid } from "../algorithms/helpers";


export const PathfindingVisualizer = React.memo(() => {

  // todo: rewrite to BoardComponent
  const [ nodes, setNodes ] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const grid = getInitialGrid()
    setNodes(grid);

  }, []);

  console.log(nodes, "nodes");

  return (
    <div className={styles.grid}>
      {
        nodes?.map((row, index: number) => {
          return <div key={index}>
            {
              row?.map((node: any, nodeIndex: number) =>
                <Node isStart={node.isStart} isFinish={node.isFinish} key={nodeIndex} />)
            }
          </div>;
        })
      }
    </div>
  );
});