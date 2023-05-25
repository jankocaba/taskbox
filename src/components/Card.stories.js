import Card from './TheCard.vue';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Card Title',
    backgroundColor: 'red'
  }
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />'
})

export const FirstStory = Template.bind({});
FirstStory.args = {
  subTitle: 'Card Subtitle'
};

export const SecondStory = Template.bind({});
SecondStory.args = {
  ...FirstStory.args,
  text: 'Card Text'
};
SecondStory.argTypes = {
  backgroundColor: { control: 'inline-radio', options: ['red', 'blue'] },
};
