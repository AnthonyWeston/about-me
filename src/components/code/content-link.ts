import { ContentSpec } from '../content/content-spec';
import type { Literal } from './literal-types';

export class ContentLink<S extends ContentSpec> {
  readonly value: Literal;

  readonly content: S;

  constructor(value: Literal, content: S) {
    this.value = value;
    this.content = content;
  }
}
