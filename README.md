# automate-gulp
Gulp is a command line task runner, which works on Node environment. 
It runs custom defined tasks rapidly.

## Set up Gulp
* Create package.json
```
yarn init
```
* Install gulp and dependencies
```
yarn add --dev gulp babel-core babel-preset-env
```
* Create .babelrc & gulpfile.babel.js
```
touch .babelrc gulpfile.babel.js
```
* Implement tasks and run

## Main tasks
#### Styles
Compile sass file to css. It is `styles` task in gulpfile.babel.js.
We use `gulp-sourcemaps` and `gulp-sass` to translate.
```
yarn add --dev gulp-sourcemaps gulp-sass
```

#### Scripts
Compile es6 to pure javascript. It is `scripts` task in gulpfile.babel.js.
We use `rollup-stream`, `vinyl-source-stream`, `vinyl-buffer`, `gulp-sourcemaps` and `gulp-babel`.
To minify endpoint file, we use `gulp-uglify`.
```
yarn add --dev rollup-stream vinyl-source-stream vinyl-buffer gulp-sourcemaps gulp-babel gulp-uglify
```

#### LiveReload
We use `gulp-connect` for hot-reload the changes.
```
yarn add --dev gulp-connect
```

## Bonus
It is recommended that you format your code style. Coding follow a convention is the best way to practice your own style.
#### Stylelint
```
yarn add --dev gulp-postcss stylelint gulp-stylelint precss autoprefixer
```
#### Eslint
```
yarn add --dev gulp-eslint eslint-config-airbnb-base eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

## References
[gulp](https://gulpjs.com/),
[babel](https://babeljs.io/),
[gulp-sass](https://github.com/dlmanning/gulp-sass),
[gulp-sourcemaps](https://github.com/gulp-sourcemaps/gulp-sourcemaps),
[rollup-stream](https://github.com/Permutatrix/rollup-stream),
[vinyl-source-stream](https://github.com/hughsk/vinyl-source-stream),
[vinyl-buffer](https://github.com/hughsk/vinyl-buffer),
[gulp-uglify](https://github.com/terinjokes/gulp-uglify),
[gulp-connect](https://github.com/AveVlad/gulp-connect)
[postcss](http://postcss.org/),
[eslint](https://eslint.org/)