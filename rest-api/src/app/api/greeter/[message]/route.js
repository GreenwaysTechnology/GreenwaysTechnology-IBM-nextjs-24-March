import { NextResponse } from "next/server";

export async function GET(request, { params: {message} }) {
    // console.log(obj.params.message)
    return NextResponse.json({ message })
}