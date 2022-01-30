export type Primitive = string | number | boolean | null | undefined
export type Literal = Primitive | { [key: string]: Literal } | Literal[];
