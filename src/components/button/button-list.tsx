import React, { HTMLProps } from 'react';

// export const ButtonList = styled.div<JustifyContentProps>`
// 	display: flex;
// 	flex-grow: 1;
// 	margin: 0 -0.325rem;
//
// 	& .button {
// 		margin: 0 0.325rem;
// 	}
//
// 	${compose(justifyContent)}
// `;

export const ButtonList: React.FC<HTMLProps<HTMLDivElement>> = ({
	children,
	...props
}) => {
	return <div {...props}>{children}</div>;
};
