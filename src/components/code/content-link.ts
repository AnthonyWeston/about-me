import { ContentSpec } from '../content/content-spec';
import type { Literal, RawValueType } from './literal-types';

export class ContentLink<T extends Literal = Literal, S extends ContentSpec = ContentSpec> {
  readonly value: T;

  readonly content: S;

  constructor(value: T, content: S) {
    this.value = value;
    this.content = content;
  }
}

export function unwrap<T extends RawValueType>(value: Literal<T> | ContentLink<Literal<T>>): T {
  if (value instanceof ContentLink) {
    return unwrap(value.value);
  } else if (value instanceof Function) {
    return unwrap(value());
  } else {
    return value;
  }
}
