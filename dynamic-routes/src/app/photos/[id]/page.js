import Image from "next/image"

export async function fetchPhotoById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    const photo = await response.json()
    //here we return Promise of Photos
    return photo
}
export default async function PhotosDetailPage({ params: { id } }) {
    const photo = await fetchPhotoById(Number(id))
    return <>
        <h1>Photos  detail page</h1>
        <h2>Id {photo.id} </h2>
        <h2>Album Id {photo.albumId} </h2>
        <p>Title {photo.title}</p>
        <a href={`${photo.url}`}>{photo.url}</a>
        <Image
            src={`${photo.thumbnailUrl}`}
            width={500}
            height={500}
            alt="Picture of the Picture"
        />
    </>
}