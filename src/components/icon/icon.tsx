import React from 'react';
import clsx from 'clsx';
import styles from './icon.styles.module.scss';
import { ReactComponent as ChevronRight } from './collections/chevron-right.svg';
import { ReactComponent as ChevronDown } from './collections/chevron-down.svg';
import { ReactComponent as ChevronLeft } from './collections/chevron-left.svg';
import { ReactComponent as ChevronTop } from './collections/chevron-top.svg';
import { ReactComponent as Check } from './collections/check.svg';
import { ReactComponent as HorizontalLine } from './collections/horizontal_line.svg';


export enum ICON_NAMES_ENUM {
	chevron_right = 'chevron_right',
	chevron_down = 'chevron_down',
	chevron_left = 'chevron_left',
	chevron_top = 'chevron_top',
	check = 'check',
	horizontal_line = 'horizontal_line',
}

const ICONS = {
	chevron_right: ChevronRight,
	chevron_down: ChevronDown,
	chevron_left: ChevronLeft,
	chevron_top: ChevronTop,


	check: Check,
	horizontal_line: HorizontalLine,
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
