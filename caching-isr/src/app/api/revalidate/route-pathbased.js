import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"


export  async function GET(request) {
    //get the path so that we can revalidate via path 
    const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
    //get Tag//Collection 

    const collection = request.nextUrl.searchParams.get('collection') || 'collection'
      revalidatePath(path)
    console.log('revalidated', path)
    return NextResponse.json({ revalidated: true, now: Date.now(), cache: 'no-store' })

}