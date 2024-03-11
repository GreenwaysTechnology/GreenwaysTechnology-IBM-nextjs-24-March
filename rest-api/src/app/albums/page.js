
export async function getAlbums() {
    const url = `${process.env.HOST}/alubums`
    //const url = 'http://localhost:3000/api/alubums'
    // console.log(url)
    const response = await fetch(url)
    return response.json()
}

export default async function AlbumPage() {
    const albums = await getAlbums()
    return <>
        <h1>AlbumPage</h1>
        <ul>
            {
                albums.map(album => {
                    return <li key={album.id}>{album.title}</li>
                })
            }
        </ul>
    </>
}