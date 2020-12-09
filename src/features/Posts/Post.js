import React from 'react'
import { useSelector } from 'react-redux'

export const Post = () => {

    const posts = useSelector(state => state.posts)

    const renderedPosts = posts.map(post => (
        <div className="card cards">
            <img src="..." class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
            </div>
        </div>
    ))

    return (
        <React.Fragment>
            {renderedPosts}
        </React.Fragment>
    )   
}