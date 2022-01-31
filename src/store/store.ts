import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';
import type { Store } from 'vuex';
import { TabSpec } from '@/components/ui/tab-spec';

export interface State {
  tabs: TabSpec[],
  selectedTabIndex: number
}

export const key: InjectionKey<Store<State>> = Symbol('Vuex injection key');

export const store = createStore<State>({
  state: {
    tabs: [
      new TabSpec('about-me.ts', 'TSCode'),
      new TabSpec('test1.txt', 'TSLiteral', { value: 'test1' }),
      new TabSpec('test2.txt', 'TSLiteral', { value: 'test2' }),
      new TabSpec('test3.txt', 'TSLiteral', { value: 'test3' }),
      new TabSpec('test4.txt', 'TSLiteral', { value: 'test4' }),
      new TabSpec('test5.txt', 'TSLiteral', { value: 'test5' }),
      new TabSpec('test6.txt', 'TSLiteral', { value: 'test6' }),
      new TabSpec('test7.txt', 'TSLiteral', { value: 'test7' }),
      new TabSpec('test8.txt', 'TSLiteral', { value: 'test8' }),
    ],
    selectedTabIndex: 0,
  },
  getters: {
  },
  mutations: {
    addTab(state, tab) {
      if (tab instanceof TabSpec) {
        const newLength = state.tabs.push(tab);
        state.selectedTabIndex = newLength - 1;
      } else {
        throw new TypeError(`Invalid tab (type ${tab.constructor.name}, expected TabSpec)`);
      }
    },
    selectTab(state, index) {
      state.selectedTabIndex = index;
    },
    closeTab(state, index) {
      state.tabs.splice(index, 1);

      if (index < state.selectedTabIndex || state.selectedTabIndex === state.tabs.length) {
        state.selectedTabIndex -= 1;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
