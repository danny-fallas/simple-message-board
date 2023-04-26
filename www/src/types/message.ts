import User from './user';

type Message = {
    id: number,
    text: string,
    user?: User,
    createdAt: Date,
};

export default Message;