import React from 'react';
import Comment from './Comment';


const comments = [
    {
        name:"박은솔",
        comment:"안녕하세요",
    },
    {
        name:"ㅁㅁ",
        comment:"hello",
    },
    {
        name:"ㄱㄱ",
        comment:"hi",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;