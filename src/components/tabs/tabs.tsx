import React from 'react';
import { TabContext } from './tab-context';

interface TabsProps {
	value?: number;
	children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ value, children }) => {
	return (
		<TabContext.Provider value={{ value }}>{children}</TabContext.Provider>
	);
};
