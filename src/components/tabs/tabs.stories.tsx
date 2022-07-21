import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Tab } from './tab';
import { TabList } from './tab-list';
import { Tabs } from 'components/tabs/tabs';
import {TabContent} from "components/tabs/tab-content";

export default {
	title: 'Tabs',
	// component: Button,
};

const Template: Story = (args) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleChangeTab = (index) => () => setActiveTab(index);

	return (
		<Tabs value={activeTab}>
			<TabList>
				<Tab onClick={handleChangeTab(0)}>Tab 1</Tab>
				<Tab onClick={handleChangeTab(1)}>Tab 2</Tab>
				<Tab onClick={handleChangeTab(2)}>Tab 3</Tab>
			</TabList>
			<TabContent>
				<div> Tab 1 Content </div>
				<div> Tab 2 Content </div>
				<div> Tab 3 Content </div>
			</TabContent>
		</Tabs>
	);
};

export const Primary = Template.bind({});

Primary.args = {};
