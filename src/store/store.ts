import { TabSpec } from '@/components/content/tab-spec';
import { defineStore } from 'pinia';
import aboutMe from './about-me';

export interface State {
  tabs: TabSpec[],
  selectedTabIndex: number
}

export const useTabStore = defineStore('tabs', {
  state: (): State => ({
    tabs: [
      aboutMe,
      new TabSpec('test1.txt', 'TSLiteral', { value: 'test1' }),
      new TabSpec('test2.txt', 'TSLiteral', { value: 'test2' }),
    ],
    selectedTabIndex: 0,
  }),
  getters: {
    selectedTab: (state) => state.tabs[state.selectedTabIndex],
  },
  actions: {
    addTab(tab: TabSpec) {
      this.tabs.splice(this.selectedTabIndex + 1, 0, tab);
      this.selectedTabIndex += 1;
    },
    selectTab(index: number) {
      this.selectedTabIndex = index;
    },
    closeTab(index: number) {
      this.tabs.splice(index, 1);

      if (index < this.selectedTabIndex || this.selectedTabIndex === this.tabs.length) {
        this.selectedTabIndex -= 1;
      }
    },
  },
});
