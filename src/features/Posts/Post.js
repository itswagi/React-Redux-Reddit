import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllPosts, fetchPosts} from './postsSlice'

export const Post = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(state => state.posts.status)
    useEffect(() => {
        if(postsStatus === 'idle')
            dispatch(fetchPosts())
    }, [postsStatus, dispatch])

    const renderedPosts = posts.posts.map(post => (
            <div className="card cards">
                <img src={post.data.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <a href={post.data.url}><h5 className="card-title">{post.data.title}</h5></a>
                    <p className="card-text">{post.data.selftext}</p>
                </div>
            </div>
        ))
    
    

    return (
        <React.Fragment>
            {renderedPosts}
        </React.Fragment>
    )   
}