#!/bin/bash

git checkout -B gh-pages
yarn build
git add -f docs
git commit -m "Deploy $(git rev-parse --short HEAD ): $(git log -1 --pretty=%B)"
git push -f
git checkout -
