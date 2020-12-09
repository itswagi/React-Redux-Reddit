import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
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