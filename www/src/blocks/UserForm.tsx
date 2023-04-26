import { useSessionState } from '@dannyman/use-store';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Flex from 'components/Flex';
import { apiPost } from 'utils/axios';

type props = {
    style?: any,
    [x: string]: any,
};

const UserForm: React.FC<props> = ({ message, ...props }) => {
    const router = useRouter();

    const [fullName, setFullName] = useState('');
    const [, setUser] = useSessionState('mb-user');

    const onSubmit = async () => {
        if (fullName) {
            const result = await apiPost('user/create', { fullName });
            if (result?.success) {
                setUser(result.data);
                window.alert('User CREATED!');
                router.reload();
            }
        } else {
            window.alert('Provide a full name to create a user')
        }
    };

    return (<>
        <Flex>
            <label>Full Name:</label>
            <input type="text"
                placeholder="Type your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)} />
            <button
                type="submit"
                onClick={onSubmit}>
                Create user
            </button>
        </Flex>
    </>);
};

export default UserForm;
