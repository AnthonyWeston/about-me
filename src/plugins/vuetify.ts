// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import colors from 'vuetify/lib/util/colors';

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify';

const primaryLight = '#091366';

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: colors.grey.darken4,
    secondary: colors.grey.darken4,
    accent: primaryLight,
    export: '#c586c0',
    variable: '#4fc1ff',
    keyword: '#569cd6',
    'type-annotation': '#4ec9b0',
    string: '#ce9178',
    number: '#b5cea8',
    'object-key': '#9cdcfe',
    'depth-mod-0': '#ffd700',
    'depth-mod-1': '#da70d6',
    'depth-mod-2': '#179fff',
  },

};

const secondary = '#20485f';
// const primary = '#003566';
// const secondary = '#412533';
const accent = colors.pink.accent4;

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    ...darkTheme.colors,
    surface: colors.grey.lighten3,
    primary: primaryLight,
    secondary,
    export: accent,
    variable: colors.blue.darken2,
    keyword: accent,
    'type-annotation': colors.teal.darken2,
    string: primaryLight,
    number: colors.grey.darken1,
    'object-key': secondary,
    'depth-mod-0': colors.deepOrange.base,
    'depth-mod-1': accent,
    'depth-mod-2': colors.cyan.darken2,
  },
};

export default createVuetify({
  theme: {
    defaultTheme: 'code-dark',
    themes: {
      'code-dark': darkTheme,
      'code-light': lightTheme,
    },
    variations: {
      colors: ['surface', 'primary', 'secondary'],
      lighten: 2,
      darken: 3,
    },
  },
});
