import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import soquijTheme from './soquijTheme'

addons.setConfig({
  theme: soquijTheme,
});