import { useEffect, useState } from 'react'
import PostLikeButton from "../components/PostLikeButton"
import CommentCard from './CommentCard'

const PostCard = ({post, handleLikePostClick, comments, handleLikeCommentClick, handleAddCommentClick}) => {
  
    return(
        <li key={post._id} className='post-item'>
            <div className='post-title'>
                {post.title}
            </div>
            <div className='post-body'>
                {post.post}
            </div>
            <div className='post-publish-date'>
                {post.publish_date}
            </div>
            <PostLikeButton post={post} handleLikePostClick={handleLikePostClick}/>
            {
                comments.length > 0 &&
                <ul className='comments-list'>
                    {
                        comments.map((comment) => {
                            return(
                                <CommentCard key={comment._id} comment={comment} handleLikeCommentClick={handleLikeCommentClick}/>
                            )
                        })
                    }
                </ul>
            }
            <form method='POST' className='new-comment-form' onSubmit={(e) => handleAddCommentClick(e)}>
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="new-comment-comment" cols="30" rows="10" placeholder='write your thoughts here...'>

                </textarea>
                <input type="hidden" value={post._id} name='post_id'/>
                <button type='submit'>Submit</button>
            </form>
        </li>
    )
}

export default PostCard