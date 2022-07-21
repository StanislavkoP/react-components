import React, { useEffect, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import { debounce } from 'lodash';
import styles from './tab-list.module.scss';
import { useDidUpdate } from 'hooks/use-did-update';
import {useTabContext} from "components/tabs/tab-context";

interface TabListProps {
	className?: string;
	children?: React.ReactNode;
}

export const TabList: React.FC<TabListProps> = ({
	className,
	children: childrenProp,
}) => {
	const { value } = useTabContext();
	const tabsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const indicatorRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	useLayoutEffect(() => {
		calculateIndicatorData();
	}, [value, tabsRef.current, indicatorRef.current]);

	useDidUpdate(() => {
		if (!indicatorRef.current) return;

		indicatorRef.current.style.transition = `left 0.3s, width 0.2s ease`;
	}, [indicatorRef.current]);

	useEffect(() => {
		const handleResize = debounce(() => {
			calculateIndicatorData();
		});

		let resizeObserver;

		if (typeof ResizeObserver !== 'undefined') {
			resizeObserver = new ResizeObserver(handleResize);
			resizeObserver.observe(tabsRef.current);
		} else {
			window.addEventListener('resize', handleResize);
		}

		return () => {
			window.removeEventListener('resize', handleResize);
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		};
	}, [tabsRef.current, value]);

	function calculateIndicatorData() {
		const tabsEl = tabsRef.current;
		const indicatorEl = indicatorRef.current;

		if (!tabsEl || !indicatorEl) return;

		if (value !== undefined) {
			const activeTab = tabsEl.children[value] as HTMLElement;
			const activeTabMeta = activeTab.getBoundingClientRect();

			indicatorEl.style.width = `${activeTabMeta.width}px`;
			indicatorEl.style.left = `${activeTab.offsetLeft}px`;
		}
	}

	const children = React.Children.map(childrenProp, (child, idx) => {
		if (!React.isValidElement(child)) {
			return null;
		}

		return React.cloneElement(child, {
			isActive: idx === value,
			...child.props,
		});
	});

	return (
		<div
			role="tablist"
			ref={tabsRef}
			className={clsx(styles['tab-list'], className)}
		>
			{children}
			<div
				ref={indicatorRef}
				role="presentation"
				className={styles['tab-list__underline']}
			/>
		</div>
	);
};
