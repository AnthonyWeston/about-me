# Dependencies

### Vue 3

Features I learned more about:

* Composition API
* Transitions (v-transition and CSS transitions)
* Breaking changes between Vue 2/Vue 3 - The experience should prove useful in migrating applications I'm currently working on.

### Pinia

This application didn't strictly require a state management solution, but I wanted to explore [Pinia](https://pinia.vuejs.org/), as Pinia appears to be replacing Vuex in the Vue ecosystem, and [is the recommended state management plugin for new applications](<https://vuejs.org/guide/scaling-up/state-management.html#pinia>).

I started with Vuex with the intention of migrating to Pinia, as kind of a playtest for migrating an application I'm currently working on. My impression was quite positive:

* Pinia supports gradual migration of individual modules.
* Pinia provides better type inference compared to Vuex, and without the hacky feel of Vuex's TypeScript support. Type inference works out of the box for code within the store inside a component.
* The developer no longer has to keep track of whether something is a member of `store.state` or `store.getters` (this trips me up when using `mapState`/`mapGetters`) - both are accessible in the component as properties of `store`.
* Also, the logo is cute.

### Vuetify

 I found it easy to use and encountered no significant issues. The current release doesn't have the all the components completed, but I was interested in previewing how things would look overall when the next major release comes out.
