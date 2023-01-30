import React from "react";
import styles from "./style.module.css";
import classNames from "classnames";

type NodeProps = {
  isStart: boolean,
  isFinish: boolean
}

const defNode = {
  row: 0,
  col: 0,
};

export const Node: React.FC<NodeProps> = (
  {
    isStart,
    isFinish,
  },
) => {

  return (
    <div className={classNames(styles.node, {
      [styles.isStart]: isStart,
      [styles.isFinish]: isFinish,
    })
    }></div>
  );
};