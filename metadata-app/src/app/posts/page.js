import Link from "next/link"

//add meta data
export const metadata = {
    title: 'Post'
}
export async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
}

export default async function Posts() {
    const posts = await fetchPosts()
    return <div className="flex min-h-screen flex-col  justify-between p-24">
        <h1>Post</h1>
         <ul>
            {
                posts.map(post=>{
                    return <li>
                         <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })
            }
         </ul>
    </div>
}