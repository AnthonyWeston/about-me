# Vue/Java version upgrade

We chose to upgrade an application from Vue 2/Java 8 to Vue 3/Java 17. The three primary reasons for this decision were:

- To ensure we continue to stay on supported versions
- Enjoy performance improvements
- Take advantage of language and framework features

The overall strategy I implemented was to break the changes down into more incremental steps. After some research using online documentation and guides, the process was broken down into 5 steps:

1. Upgrade dependencies to the newest possible version without a full upgrade.
2. Replace usages of deprecated/removed features with implementations compatible with the upgrade, where possible without upgrading.
3. (Vue only) Upgrade to Vue 3, and use the @vue/compat package as a bridge so we could migrate features to Vue 3 individually without breaking backwards compatibility with unmigrated features.
4. Fix breaking changes, stopping at the point where the changes are viable to move forward with a merge
5. Fix any remaining issues and deprecation warnings

As a side note, I found it helpful to maintain a local migration branch, which was updated frequently from the main branch, then do ticket work on the migration branch. Commits for ticket work were then cherry-picked onto a non-migration branch for local testing and merging back into the main branch, without introducing migration changes before they were ready. This helped mitigate the risk of unexpected issues making it into production.

Overall, the effort was successful, and the only new defect identified as a result of these changes was an incorrect link to a static resource due to a change in how Webpack handles static files.
