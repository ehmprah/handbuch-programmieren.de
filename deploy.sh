#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'handbuch-programmieren.de' > CNAME

git init
git add -A
git commit -m 'deploy'

# HTTPS
#git push -f https://github.com/ehmprah/handbuch-programmieren.de.git master:gh-pages

# SSH
git push -f git@github.com:ehmprah/handbuch-programmieren.de.git master:gh-pages


cd -
