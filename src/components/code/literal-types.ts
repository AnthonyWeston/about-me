export type Primitive = string | number | boolean | null | undefined
export type Value = Primitive | { [key: string]: Value } | Value[];
export type NonPrimitiveValue = Exclude<Value, Primitive>

export type RawValueType = Primitive | Value | NonPrimitiveValue
export type Supplier<T> = () => T

export type Literal<T extends RawValueType = RawValueType> = T | Supplier<T>
