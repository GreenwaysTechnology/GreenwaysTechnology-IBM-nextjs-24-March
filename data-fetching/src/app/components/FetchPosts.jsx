'use client'

import { useEffect, useState } from "react"

export default function FetchPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPostsDetails() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const posts = await response.json()
            setPosts((myposts) => {
                return posts.concat(myposts)
            })
        }
        fetchPostsDetails()
        return () => {
            return null
        }
    }, [])
    return <>
        <h1>Posts</h1>
        <ul>
            {posts.map(post => {
                return <li>
                    <span>{post.title}</span>
                </li>
            })}
        </ul>
    </>
}