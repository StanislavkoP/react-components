import React, { InputHTMLAttributes } from 'react';
import { Icon, ICON_NAMES_ENUM } from '../icon/icon';
import styles from './checkbox.module.scss';
import clsx from 'clsx';

export interface CheckboxProps {
	className?: string;
	name?: string;
	indeterminate?: boolean;
	label?: React.ReactNode;
	checked?: boolean;
	onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
	onClick?: InputHTMLAttributes<HTMLLabelElement>['onClick'];
}

export const Checkbox: React.FC<CheckboxProps> = ({
	className,
	label,
	name,
	indeterminate,
	checked,
	onChange,
	onClick,
}) => {
	return (
		<label className={clsx(styles.checkbox, className)} onClick={onClick}>
			<input
				type="checkbox"
				name={name}
				checked={checked}
				onChange={onChange}
			/>

			<div className={styles.checkbox__control}>
				<div className={styles.checkbox__track} />
				{indeterminate && (
					<Icon
						className={styles.checkbox__icon}
						name={ICON_NAMES_ENUM.horizontal_line}
					/>
				)}
				{!indeterminate && (
					<Icon
						className={styles.checkbox__icon}
						name={ICON_NAMES_ENUM.check}
					/>
				)}
			</div>

			{label && (
				<span className={clsx(styles.checkbox__text, 'toggle__text-label')}>
					{label}
				</span>
			)}
		</label>
	);
};
