/**
 * This is the main.ts file. Import global CSS and scripts here.
 * Learn more: gridsome.org/docs/client-api
 */

/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

/**
 * Global css imports
 */
require('~/main.css');
/**
 * import '~/assets/css/global.css';
 */

/**
 * Font Awesome import
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import { faGithub, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitter, faDev);

/**
 * Layout imports
 */
import DefaultLayout from '~/layouts/Default.vue';

/**
 * Client API contructor
 */
const client: ClientApiConstructor = (Vue, VueFuse) => {
  Vue.component('Layout', DefaultLayout);

  // FontAwesome
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('font-awesome-layers', FontAwesomeLayers);
  Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

  // Vue-Fuse Search
  Vue.component('vue-fuse', VueFuse);
};

export default client;
