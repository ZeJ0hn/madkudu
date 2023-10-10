
export enum Direction {
  Curved,
  Twisted,
  Straight,
  Spiky,
  Spiraled,
  Lyre,
  shaped,
}

export type Antelope = {
	name: string,
    continent: string,
    weight: number,
    height: number,
    horns: Direction,
    picture: string
}
