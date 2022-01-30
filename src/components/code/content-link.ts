import type { TabSpec } from '@/components/ui/tab-spec';
import type { Primitive } from './literal-types';

export class ContentLink {
  readonly value: Primitive;

  readonly content: TabSpec;

  constructor(value: Primitive, content: TabSpec) {
    this.value = value;
    this.content = content;
  }
}
