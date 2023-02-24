**Note:** [Jeffrey Way](https://github.com/JeffreyWay) is the original author of this package ([found here](https://github.com/JeffreyWay/laravel-elixir-vueify)). All credit goes to him. I just forked it and bumped the vueify version to work with Vue 2.0 (currently in beta).

# Usage

## Step 1: Install

```
npm install laravel-elixir-vueify-2.0
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-vueify-2.0');

elixir(function(mix) {
    mix.browserify('main.js');
});
```

Notice above, where we require `laravel-elixir-vueify`. That's all you need. Behind the scenes, all of the necessary dependencies have been installed, and Vueify has been inserted into Laravel Elixir's Browserify transformers list.

## Step 3. Build Amazing Things

You're done. :)

> Having trouble? [Here's a starter example site that uses Laravel Elixir, Browserify, and Vueify](https://github.com/laracasts/Laravel-Elixir-Vueify-Setup).
