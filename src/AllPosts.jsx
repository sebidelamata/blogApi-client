import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [allPostsError, setAllPostsError] = useState(null)
    const [allPostsLoading, setAllPostsLoading] = useState(true)
    const [likedState, setLikedState] = useState(false)

    const fetchAllPosts =async () => {
        const url = 'http://localhost:3000/posts/all_posts'

        try{
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Accept': '*/*',
                },
              });

            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setAllPosts(data);
        }catch(error){
            setAllPostsError(error.message)
        }finally{
            setAllPostsLoading(false)
        }
    }

    useEffect(() => {
        fetchAllPosts()
    }, [likedState])

    const handleLikePostClick = async (postID) => {
        if(likedState === false){
            const url = `http://localhost:3000/posts/${postID}/like`

            try{
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                    'Accept': '*/*',
                    },
                });

                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(response)
                setLikedState(!likedState)
                return
            }catch(error){
                console.log(error.message)
            }
        } else {
            const url = `http://localhost:3000/posts/${postID}/unlike`

            try{
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                    'Accept': '*/*',
                    },
                });

                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(response)
                setLikedState(!likedState)
                return
            }catch(error){
                console.log(error.message)
            }
        }
    }

    if(allPostsError !== null){
        return <h1>A Network Error Has Occured</h1>
    }

    if(allPostsLoading !== false){
        return <h1>Loading...</h1>
    }

    return(
        <>
        <h1 className='posts-title'>Posts</h1>
        {
            allPosts.length > 0 &&
            <ul className='posts-list'>
                {
                    allPosts.map((post) => {
                        return(
                            <PostCard key={post._id} post = {post} handleLikePostClick={handleLikePostClick}/>
                        )
                    })
                }
            </ul>
        }
        </>
    )
}

export default AllPosts