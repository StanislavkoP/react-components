import React, {useId, ChangeEvent } from 'react';
import clsx from 'clsx';
import styles from './radio-button.module.scss';

export interface RadioButtonProps {
	className?: string;
	id?: string;
	name?: string;
	value?: string;
	label?: string;
	checked?: boolean;
	labelPlace?: 'left' | 'right';
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
	className,
	label,
	name,
	value,
	id ,
	checked,
	labelPlace = 'right',
	onChange,
}) => {
	const uid = id || useId();

	return (
		<label className={clsx(styles.toggle, className)}>
			{label && labelPlace === 'left' && (
				<label
					className={clsx(
						'toggle__text toggle__text--left',
						styles['toggle__text'],
						styles['toggle__text--left'],
					)}
					htmlFor={uid}
				>
					{label}
				</label>
			)}

			<input
				id={uid}
				type="radio"
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
			/>

			<label className={styles.toggle__control} htmlFor={uid}>
				<span className={styles.toggle__track} />
			</label>

			{label && labelPlace === 'right' && (
				<label
					className={clsx(
						'toggle__text toggle__text--right',
						styles['toggle__text'],
						styles['toggle__text--right'],
					)}
					htmlFor={uid}
				>
					{label}
				</label>
			)}
		</label>
	);
};
