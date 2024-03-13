

//dynamic meta daa

export async function generateMetadata({ params, searchParams }, parent) {
    const id = Number(params.id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await response.json()
    //return meta object 

    return {
        title: `${post.id} detail`
    }
}

export default async function Posts(props) {
    return <div className="flex min-h-screen flex-col  justify-between p-24">
        <h1>{props.params.id}</h1>
    </div>
}