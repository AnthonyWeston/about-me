import type { InjectionKey } from 'vue';
import { createStore } from 'vuex';
import type { Store } from 'vuex';
import { TabSpec } from '@/components/ui/tab-spec';
import aboutMe from './about-me';

export interface State {
  tabs: TabSpec[],
  selectedTabIndex: number
}

export const key: InjectionKey<Store<State>> = Symbol('Vuex injection key');

export const store = createStore<State>({
  state: {
    tabs: [
      aboutMe,
      new TabSpec('test1.txt', 'TSLiteral', { value: 'test1' }),
      new TabSpec('test2.txt', 'TSLiteral', { value: 'test2' }),
    ],
    selectedTabIndex: 0,
  },
  getters: {
  },
  mutations: {
    addTab(state, tab) {
      if (tab instanceof TabSpec) {
        state.tabs.splice(state.selectedTabIndex + 1, 0, tab);
        state.selectedTabIndex += 1;
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
