// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    variations: {
      colors: ['surface'],
      lighten: 1,
      darken: 1,
    },
  },
});
