import React from 'react';
import clsx from 'clsx';
import styles from './icon.styles.module.scss';
import { ReactComponent as ChevronRight } from './collections/chevron-right.svg';
import { ReactComponent as ChevronDown } from './collections/chevron-down.svg';
import { ReactComponent as ChevronLeft } from './collections/chevron-left.svg';
import { ReactComponent as ChevronTop } from './collections/chevron-top.svg';

export enum ICON_NAMES_ENUM {
	chevron_right = 'chevron_right',
	chevron_down = 'chevron_down',
	chevron_left = 'chevron_left',
	chevron_top = 'chevron_top',
}

const ICONS = {
	chevron_right: ChevronRight,
	chevron_down: ChevronDown,
	chevron_left: ChevronLeft,
	chevron_top: ChevronTop,
};

interface IconProps {
	className?: string;
	name: ICON_NAMES_ENUM;
}

export const Icon: React.FC<IconProps> = ({ className, name, ...props }) => {
	if (!(name in ICONS)) return null;

	const Component = ICONS[name];

	return (
		<span className={clsx(className, styles.icon)} {...props}>
			<Component />
		</span>
	);
};
