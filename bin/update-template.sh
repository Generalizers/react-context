#!/bin/bash

if [ -z "$(which git)" ]; then
  echo "Please install git and rerun this script"
  exit 2
fi

if ! git ls-remote template; then
  git remote add template git@github.com:Generalizers/template-tsx-lib.git
  echo "Added new template remote"
  git remote set-url --push template FORBIDDEN
  echo "Disabled push for template remote"
fi

git checkout template/master
git pull template master
echo "Pulled from template"
git checkout master
git rebase template/master
echo "Rebasing with new template"
