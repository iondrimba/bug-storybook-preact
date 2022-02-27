import { ButtonCP } from './Button';

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonCP,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <ButtonCP {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
