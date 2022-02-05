import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/ui/tab-spec';

export default new TabSpec('about-me.ts', 'TSCode', {
  value: {
    name: new ContentLink('Anthony', new TabSpec('greeting.md', 'TSLiteral', { value: 'Hi, my name is Anthony!' })),
    emptyArray: [],
    shortArray: [true, false],
    longArray: [1, '2', { 3: 4 }],
    emptyObject: {},
    smallObject: { a: null, b: undefined },
    object: { x: 'y', w: 'z', a: 'b' },
  },
});
