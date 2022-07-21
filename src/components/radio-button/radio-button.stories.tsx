import React from 'react';
import { Story } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './radio-button';

export default {
	title: 'Radio Button',
	component: RadioButton,
};

const Template: Story<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Radio Button',
};
