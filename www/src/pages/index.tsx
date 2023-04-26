import { useSessionState } from '@dannyman/use-store';
import { GetServerSideProps } from 'next';
import UserForm from 'blocks/UserForm';
import MessageForm from 'blocks/MessageForm';
import MessageContainer from 'blocks/MessageContainer';
import Flex from 'components/Flex';
import { apiGet } from 'utils/axios';
import { useEffect, useState } from 'react';

type props = {
  messages: any
}
const Home: React.FC<props> = ({ messages }) => {
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [user] = useSessionState('mb-user', null, { listen: true });

  useEffect(() => {
    console.log(888, user)
    if (user) {
      setShowMessageForm(true);
    }
  }, [user]);

  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="space-evenly">
        <MessageContainer
          messages={messages} />
        <Flex
          justifyContent="center"
          fullWidth
          style={{ padding: 25 }}>
          {showMessageForm ?
            <MessageForm user={user} /> :
            <UserForm />
          }
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, ...context }) => {
  const allMessages = await apiGet('/message/all');

  return {
    props: {
      messages: allMessages.data || []
    }
  };
};

export default Home;
