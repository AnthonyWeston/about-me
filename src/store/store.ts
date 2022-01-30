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
      { name: 'about-me.ts', component: 'TSCode', props: {} },
      { name: 'test1.txt', component: 'TSLiteral', props: { value: 'test1' } },
      { name: 'test2.txt', component: 'TSLiteral', props: { value: 'test2' } },
    ],
    selectedTabIndex: 0,
  },
  getters: {
  },
  mutations: {
    addTab(state, tab) {
      state.tabs.push(tab);
      state.selectedTabIndex = state.tabs.length - 1;
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
