import { ContentSpec } from './content-spec';

export class HoverSpec extends ContentSpec {
  getCopy(): HoverSpec {
    return new HoverSpec(this.name, this.component, ContentSpec.deepCopy(this.props));
  }
}
