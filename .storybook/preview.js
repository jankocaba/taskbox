/** @type { import('@storybook/vue3').Preview } */
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    }
  },
};

export default preview;
