import React, {FC} from 'react';
import style from './Comment.module.scss'

interface CommentProps {
    body: string,
    email: string,
    name: string
}

const Comment: FC<CommentProps> = ({body, email, name}) => {
    return (
        <div className={style.wrap}>
            <div className={style.name}><span>{name}</span> <a href={`mailto:${email}`}>{email}</a></div>
            <div className={style.body}>{body}</div>
        </div>
    );
};

export default Comment;