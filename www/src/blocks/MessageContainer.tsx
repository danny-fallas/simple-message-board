import { default as TSMessage } from 'ts/message';

import Flex from 'components/Flex';
import Message from 'components/Message';

type props = {
    messages: Message[],
    [x: string]: any,
};

const MessageContainer: React.FC<props> = ({ messages, ...props }) => {
    return (<>
        <Flex
            fullWidth
            style={{
                padding: 25,
                overflow: 'auto',
                maxHeight: '100vh'
            }}>
            {messages.map((m: TSMessage, i) =>
                <Message
                    key={`message-content-${i}`}
                    message={m} />
            )}
        </Flex>
    </>);
};

export default MessageContainer;
