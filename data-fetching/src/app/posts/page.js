import FetchPost from "@/app/components/FetchPosts";
import FetchPostsUsingSWR from "@/app/components/PostsClientUsingSWR"

export default function PostPage(){
    return <div>
        <h1>Post Page Fetching Data from the Client Side</h1>
        {/* <FetchPost/> */}
        <FetchPostsUsingSWR/>
    </div>
}