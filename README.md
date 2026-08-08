npm install --save-dev chromatic
git init
git add . && git commit -m 'compulsory commit'
npx chromatic --project-token=chpt_9d0ea3cb11be294

"scripts": {
  "chromatic": "npx chromatic --project-token=chpt_9d0ea3cb11be294"
}


printf '%s\n' '--- binaries ---' && 
ls node_modules/.bin 2>/dev/null || true && printf '%s\n' '--- storybook files ---' && 
rg --files -g '*storybook*' -g '.storybook/**' -g 'stories/**' . 2>/dev/null || true