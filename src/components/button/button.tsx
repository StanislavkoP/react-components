import React, { ButtonHTMLAttributes, ComponentType } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

import { Icon, ICON_NAMES_ENUM } from '../icon/icon';
import { Spinner } from '../spinner/spinner';

type ButtonVariants = 'primary' | 'primary_outlined' | 'primary_ghost';

const BUTTON_VARIANTS_CLASSES: Record<ButtonVariants, string> = {
	primary: styles['button--primary'],
	primary_outlined: styles['button--primary-outlined'],
	primary_ghost: styles['button--primary-ghost'],
};

export interface ButtonProps {
	tag?: string | ComponentType<any>;
	className?: string;
	variant?: ButtonVariants;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
	disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled'];
	label?: React.ReactNode;
	icon?: ICON_NAMES_ENUM;
	iconPlace?: 'left' | 'right';
	loading?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	alignContent?: boolean;
	fulfilled?: boolean;
	to?: string;
}

export const Button: React.FC<ButtonProps> = ({
	tag = 'button',
	to,
	className,
	variant = 'primary',
	label,
	type,
	disabled,
	icon,
	iconPlace = 'left',
	loading,
	onClick,
	alignContent,
	fulfilled,
	...props
}) => {
	const Button = tag || 'button';

	return (
		<Button
			to={to}
			type={type}
			className={clsx(
				'button',
				styles.button,
				className,
				BUTTON_VARIANTS_CLASSES[variant],
				{ [styles['button--fulfilled']]: fulfilled },
				{ [styles.loading]: loading },
				{ [styles['button--icon-left']]: iconPlace === 'left' && !!icon },
				{ [styles['button--icon-right']]: iconPlace === 'right' && !!icon },
			)}
			disabled={disabled}
			onClick={loading ? undefined : onClick}
			{...props}
		>
			<div
				className={clsx(styles.button__content, 'button__content', {
					[styles['button__content--align']]: alignContent,
				})}
			>
				{label && (
					<span className={clsx(styles.button__label, 'button__content-label')}>
						{label}
					</span>
				)}
				{icon && (
					<Icon
						className={clsx(styles.button__icon, 'button__content-icon')}
						name={icon}
					/>
				)}
			</div>
			{loading && <Spinner className={clsx(styles.button__spinner)} />}
		</Button>
	);
};
