/**
 * @see https://storybook.js.org/basics/guide-vue/#write-your-stories
 * Put your stories in a filename.stories.js inside a component folder,
 * if will be loaded automatically
 * Run `npm run storybook` to explore your stories
 */

import { configure } from '@storybook/vue'

const loadStories = () => {
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
