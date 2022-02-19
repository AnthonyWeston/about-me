import type { TabSpec } from '@/components/ui/tab-spec';
import type { Literal } from './literal-types';

export class ContentLink {
  readonly value: Literal;

  readonly content: TabSpec;

  constructor(value: Literal, content: TabSpec) {
    this.value = value;
    this.content = content;
  }
}
