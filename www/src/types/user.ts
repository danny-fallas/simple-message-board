import Message from './message';

type User = {
    id: number,
    fullName: string,
    messages?: Message[],
    createdAt: Date,
};

export default User;