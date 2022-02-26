import { cloneDeepWith } from 'lodash-es';

export abstract class ContentSpec {
  static deepCopy<T>(value: T): T {
    return cloneDeepWith(value, (x) => (x instanceof Function ? x : undefined));
  }

  name: string;

  component: string;

  props?: Record<string, unknown>;

  constructor(name: string, component: string, props?: Record<string, unknown>) {
    this.name = name;
    this.component = component;
    this.props = props;
  }

  abstract getCopy(): ContentSpec;
}
