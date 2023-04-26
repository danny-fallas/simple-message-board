import { ReactNode } from 'react';
import Message from 'ts/message';
import Flex from './Flex';

type props = {
	message: Message,
	style?: any,
	[x: string]: any,
};

const Message: React.FC<props> = ({ message, ...props }) => {
	return (<>
		<Flex>
			<Flex
				flexDirection="row"
				alignItems="center">
				<h2>{message.user?.fullName || 'No Name'}</h2>
				<label>
					{message.createdAt ?
						new Date(message.createdAt).toDateString() :
						''
					}
				</label>
			</Flex>
			<p
				style={{
					fontSize: 18,
					textAlign: 'justify',
				}}>
				{message.text}
			</p>
		</Flex>
	</>);
};

export default Message;
