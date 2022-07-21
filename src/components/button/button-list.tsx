import React, { HTMLProps } from 'react';
import clsx from 'clsx';
import styles from './button-list.module.scss';

type ButtonListProps = HTMLProps<HTMLDivElement>;

export const ButtonList: React.FC<ButtonListProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<div {...props} className={clsx(styles['button-list'], className)}>
			{children}
		</div>
	);
};
