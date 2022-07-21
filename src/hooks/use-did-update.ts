import {DependencyList, EffectCallback, useEffect, useRef} from 'react';

export function useDidUpdate(
	effect: EffectCallback,
	deps?: DependencyList,
) {
	const isFirst = useRef(true);

	useEffect(() => {
		isFirst.current = false;
	}, []);

	useEffect(() => {
		if (!isFirst.current) {
			return effect();
		}
	}, deps);
}
