# HOW TO USE

## Project setup
```
1. Place the plugin into the WordPress /wp-content/plugins/ folder
2. Run "yarn install" in the plugin root (/wp-content/plugins/your-plugin)
3. Activate the plugin
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Pinia ready
```
main.js
// Autoimport store to all components
app.provide('generalStore', useGeneralStore());

// component/page
import { inject } from 'vue';
const generalStore = inject('generalStore');
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
