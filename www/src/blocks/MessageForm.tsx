import { useState } from 'react';
import { useRouter } from 'next/router';
import Flex from 'components/Flex';
import User from 'ts/user';
import { apiPost } from 'utils/axios';

type props = {
    user: User,
    [x: string]: any,
};

const MessageForm: React.FC<props> = ({ user, ...props }) => {
    const router = useRouter();
    const [newMessage, setMessage] = useState('');

    const onSubmit = async () => {
        if (user && newMessage) {
            const result = await apiPost('message/save', { text: newMessage, userId: user.id });
            if (result?.success) {
                window.alert('Message SENT!');
                router.reload();
            }
        } else {
            window.alert('Please add a message before sending it');
        }
    };

    return (<>
        <Flex>
            <textarea
                placeholder="Enter your message..."
                value={newMessage}
                onChange={(e) => setMessage(e.target.value)} />
            <button
                type="submit"
                onClick={onSubmit}>
                Send
            </button>
        </Flex>
    </>);
};

export default MessageForm;
