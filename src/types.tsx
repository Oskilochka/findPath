export type Node = {
  col: any
  row: any
  isStart: boolean,
  isFinish: boolean,
  distance: number,
  isVisited: boolean,
  isWall: boolean,
  previousNode: Node | null
}