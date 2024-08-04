import { StoryFn, Meta } from "@storybook/react";
import ReactAnimal from "./ReactAnimal";

export default {
    title: "React Animal Component",
    component: ReactAnimal,
} as Meta<typeof ReactAnimal>;

const Template: StoryFn<typeof ReactAnimal> = (args) => <ReactAnimal {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const SmallCircle = Template.bind({});
SmallCircle.args = {
    size: 'sm',
    shape: 'circle',
};

export const MediumSquare = Template.bind({});
MediumSquare.args = {
    size: 'md',
    shape: 'square',
};

export const LargeRounded = Template.bind({});
LargeRounded.args = {
    size: 'lg',
    shape: 'rounded',
};
