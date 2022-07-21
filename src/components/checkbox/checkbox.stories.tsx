import React from 'react';
import { Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

export default {
	title: 'Checkbox',
	component: Checkbox,
};

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Checkbox',
};
