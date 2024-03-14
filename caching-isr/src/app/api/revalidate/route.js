import { revalidateTag } from "next/cache"
import { NextResponse } from "next/server"


export async function GET(request) {
    //get Tag//Collection 
    const collection = request.nextUrl.searchParams.get('collection') || 'collection'
    revalidateTag(collection)
    console.log('revalidated', collection)
    return NextResponse.json({ revalidated: true, now: Date.now(), cache: 'no-store' })

}