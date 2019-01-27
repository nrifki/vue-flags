<h1 align="center" style="font-family: ProximaNova-Bold; font-size: 50px; color: #9dd994; text-transform: uppercase;">Vue-flags</h1>

## Documentation

You can browse the documentation for Vue-Flags [on the website](https://www.nadarifki.com/vue-flags).

## Installation

```
npm install vue-flags

# Or if you prefer using yarn
yarn add vue-flags
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue";
import VueFlags from "vue-flags";

Vue.use(VueFlags);
```

### Nuxt.js

Create a new plugin in `plugins/vueflags.js`:

```js
import Vue from "vue";
import VueFlags from "vue-flags";

Vue.use(VueFlags);
```

Add this new plugin to `nuxt.config.js`. Don't forget to set ssr to false as Vue-Flags only works in the browser for the time being.

```js
{
  // ...
  plugins: [{ src: "@/plugins/vueflags.js", ssr: false }];
}
```

## Who is using Vue-Flags?

Are you using Vue-Flags on one of your projects? [Tweet me](https://twitter.com/rifkinada) so we can add your logo here. 👻

## Contributing

You are more than welcome to contribute to Vue-Flags. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

## License

Vue Dark Mode is [MIT licensed](LICENSE).
