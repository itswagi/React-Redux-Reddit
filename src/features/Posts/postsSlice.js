import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: 'Post 1 Title',
        url: 'something',
        authorName: 'self',
        image: 'something',
        text: 'blah blah'
    },
    {
        id: 2,
        title: 'Post 1 Title',
        url: 'something',
        authorName: 'self',
        image: 'something',
        text: 'blah blah'
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer