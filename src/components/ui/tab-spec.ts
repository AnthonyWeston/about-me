import { cloneDeepWith } from 'lodash-es';

const deepCopy = (value: unknown): any =>
  cloneDeepWith(value, (x) => (x instanceof Function ? x : undefined));

export class TabSpec {
  private static _count = 0;

  static copyOf(tab: TabSpec) {
    return new TabSpec(tab.name, tab.component, deepCopy(tab.props));
  }

  name: string;

  component: string;

  props?: Record<string, unknown>;

  _id: number;

  constructor(name: string, component: string, props?: Record<string, unknown>) {
    this.name = name;
    this.component = component;
    this.props = props;
    this._id = TabSpec._count;
    TabSpec._count += 1;
  }

  get id() {
    return this._id;
  }
}
