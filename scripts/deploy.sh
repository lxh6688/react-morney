#!/usr/bin/env bash

npm run build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:lxh6688/react-morney-website.git &&
git push -u origin main -f
git -