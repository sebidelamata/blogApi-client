import { useEffect, useState } from 'react'
import PostLikeButton from "../components/PostLikeButton"

const PostCard = ({post, handleLikePostClick}) => {
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
        </li>
    )
}

export default PostCard