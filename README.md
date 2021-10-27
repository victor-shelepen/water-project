# Water project
## Summary
Single page, promotion website.
## Development
Project initialization
```bash
npm i
```
Run development server
```bash
npm start
```
Visit
```
http://localhost:8080
```
## GitHub page deployment
### Create a temporary branch.
```
git checkout -b gh-pages-preparation
```
### Compile code
```
npm run build
```

#### Uncomment `dist` folder in the file `.gitignore`
#### Add the build and commit it

```
git add dist
git commit -m "The initial dist subtree commit"
```
### Publish the build to the branch gh-pages
```
git subtree push --prefix dist origin gh-pages
```
### Open in a browser
```
https://victor-shelepen.github.io/water-project/
```
### Delete the temporary branch
```
git checkout master
git branch -D gh-pages-preparation
```