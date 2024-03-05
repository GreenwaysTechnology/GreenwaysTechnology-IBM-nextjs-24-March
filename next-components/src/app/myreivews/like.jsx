// 'use client'
import { useState } from "react"

export default function Like() {
    //declare state
    const [like, setLike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }

    return <div>
        <h3>Like {like}</h3>
        <button onClick={onLike}>Like</button>
    </div>
}