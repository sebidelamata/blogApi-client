import { useEffect, useState } from 'react'
import CommentLikeButton from "./CommentLikeButton"

const CommentCard = ({comment, handleLikeCommentClick}) => {
    return(
        <li key={comment._id} className='comment-card'>
            <div className='comment-body'>{comment.comment}</div>
            <div className='comment-publish-date'>{comment.publish_date}</div>
            <CommentLikeButton comment={comment} handleLikeCommentClick={handleLikeCommentClick}/>
        </li>
    )
}

export default CommentCard