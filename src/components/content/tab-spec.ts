import { ContentSpec } from './content-spec';

export class TabSpec extends ContentSpec {
  private static _count = 0;

  _id: number;

  constructor(name: string, component: string, props?: Record<string, unknown>) {
    super(name, component, props);
    this._id = TabSpec._count;
    TabSpec._count += 1;
  }

  get id() {
    return this._id;
  }

  getCopy(): TabSpec {
    return new TabSpec(this.name, this.component, ContentSpec.deepCopy(this.props));
  }
}
