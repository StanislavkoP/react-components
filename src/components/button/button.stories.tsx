import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { ButtonList } from './button-list';

export default {
	title: 'Button',
	component: Button,
};

const Template: Story<ButtonProps> = (args) => (
	<>
		<Button {...args} />

		<div style={{marginTop: '16px'}}>
			<ButtonList>
				<Button {...args} /> <Button {...args} />
			</ButtonList>
		</div>
	</>
);

export const Standart = Template.bind({});

Standart.args = {
	variant: 'primary',
	label: 'Primary Button',
};
