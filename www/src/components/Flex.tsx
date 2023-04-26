import { ReactNode } from 'react';

type props = {
	children: ReactNode,
	style?: any,
	[x: string]: any,
};

const Flex: React.FC<props> = ({ children, style, ...props }) => {
	let styles = {
		display: 'flex',
		flexDirection: props.flexDirection || 'column',
		flexWrap: props.flexWrap || 'nowrap',
		...style
	};

	if (props.fullWidth) styles.width = '100%';
	if (props.alignItems) styles.alignItems = props.alignItems;
	if (props.justifyContent) styles.justifyContent = props.justifyContent;
	if (props.backgroundColor) styles.backgroundColor = props.backgroundColor;
	if (props.backgroundImage) styles.backgroundImage = props.backgroundImage;

	return (<>
		<div
			className={props.className}
			style={styles}
			onClick={props.onClick}>
			{children}
		</div>
	</>);
};

export default Flex;
