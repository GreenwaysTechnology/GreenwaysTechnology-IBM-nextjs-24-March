import { NextResponse } from "next/server"

// const url = 'https://jsonplaceholder.typicode.com/albums'
const url = `${process.env.ALBUMS_URL}/albums`

//Get Album by Id
export async function GET(request, { params }) {
    try {
        const id = Number(params.id)
        const response = await fetch(`${url}/${id}`)
        const album = await response.json()
        return NextResponse.json(album)
    }
    catch (err) {
        return NextResponse.json(err)
    }
}
//update Album by Id 
export async function PUT(request, { params }) {
    //read payload,id
    try {
        const { title } = await request.json()
        const id = Number(params.id)
        const res = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        const updatedAlbum = await res.json()
        return NextResponse.json(updatedAlbum)
    }
    catch (err) {
        return NextResponse.json(err)
    }
}

//Delete Album by Id 

export async function DELETE(request, { params }) {

    try {
        const id = Number(params.id)
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        const album = await response.json()
        return NextResponse.json(album)
    }
    catch (err) {
        return NextResponse.json(err)
    }

}