import React from 'react';
import { useTabContext } from 'components/tabs/tab-context';

interface TabContentProps {
	children?: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({ children }) => {
	const { value } = useTabContext();

	const activeChildren =
		typeof value === 'number' && children && Array.isArray(children) && children.length
			? children[value]
			: null;

	return activeChildren;
};
