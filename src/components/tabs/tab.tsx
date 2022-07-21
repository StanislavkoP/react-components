import React from 'react';
import clsx from 'clsx';
import styles from './tab.module.scss';

export interface TabProps {
	className?: string;
	isActive?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	children?: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({
	className,
	isActive,
	children,
	onClick,
}) => {
	return (
		<button
			className={clsx(
				{ [styles['tab--active']]: isActive },
				styles.tab,
				className,
			)}
			type="button"
			role="tab"
			aria-selected={isActive}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
