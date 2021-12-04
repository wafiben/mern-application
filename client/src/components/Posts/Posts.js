import React from 'react'
import Post from './Post/Post'
import useStyles from './styles';
import { useSelector } from 'react-redux';
const Posts = () => {
    const posts=useSelector((state)=>state.PostReducer)
    console.log(posts)
const classes = useStyles();
    return (
        <>
            <h1>hello</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts;
