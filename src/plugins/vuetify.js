import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#6A65FF',
      },
      dark: {
        primary: '#6A65FF',
        secondary: '#A9A9A9'
      },
    },
    dark: true,
  },
});
