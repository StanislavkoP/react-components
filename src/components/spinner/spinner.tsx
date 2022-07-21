import React from 'react';
import clsx from 'clsx';
import styles from './spinner.module.scss';

interface SpinnerProps {
	className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className, ...props }) => {
	return <div className={clsx(className, styles.spinner)} {...props} />;
};
