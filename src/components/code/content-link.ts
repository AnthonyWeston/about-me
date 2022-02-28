import { ContentSpec } from '../content/content-spec';
import type { Literal } from './literal-types';

export class ContentLink<T extends Literal = Literal, S extends ContentSpec = ContentSpec> {
  readonly value: T;

  readonly content: S;

  constructor(value: T, content: S) {
    this.value = value;
    this.content = content;
  }
}
