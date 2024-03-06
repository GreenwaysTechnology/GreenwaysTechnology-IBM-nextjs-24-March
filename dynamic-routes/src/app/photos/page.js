import Link from "next/link"

//fetch photos
export async function fetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await response.json()
    //here we return Promise of Photos
    return photos
}

export default  async function PhotosMasterPage() {
    const photos = await fetchPhotos()
    return <>
        <h1>Photos Master</h1>
        <ul>
            {
                photos.map(photo => {
                    return <li>
                        <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
                    </li>
                })
            }
        </ul>
    </>
}