import React from "react";
import styles from "./style.module.css";
import classNames from "classnames";

type NodeProps = {
  isStart: boolean,
  isFinish: boolean,
  isVisited: boolean,
  mouseIsPressed?: boolean,
  onMouseDown: (row: number, col: number) => void,
  onMouseEnter: (row: number, col: number) => void,
  onMouseUp: () => void,
  row: number,
  col: number
}

const defNode = {
  row: 0,
  col: 0,
};

export const Node: React.FC<NodeProps> = (
  {
    isStart,
    isFinish,
    isVisited,
    row,
    col,
    onMouseUp,
    onMouseEnter,
    onMouseDown,
    mouseIsPressed,
  },
) => {

  return (
    <div
      id={`node-${row!}-${col}`}
      className={classNames(styles.node, {
        [styles.isStart]: isStart,
        [styles.isFinish]: isFinish,
        [styles.isVisited]: isVisited,
      })
      }
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp}
    ></div>
  );
};