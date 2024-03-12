import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

//findAll Users
export async function GET(request, { params }) {
    try {
        const id = params.id
        const users = await prisma.user.findUnique({
            where: {
                id
            }
        })
        if (!users) {
            return NextResponse.json({ message: 'No Users Found', code: 404 })
        } else {
            return NextResponse.json(users)
        }
    }
    catch (err) {
        return new NextResponse(err.message, { status: 500 })
    }
}

//update operation
export async function PUT(request, { params }) {
    try {
        const id = params.id
        const user = await request.json()
        const updatedUser = await prisma.user.update({
            where: { id },
            data: user
        })
        if (!updatedUser) {
            return NextResponse.json({ message: `No User found with ID ${id}`, code: 404 })

        }
        return NextResponse.json(updatedUser)
    }
    catch (err) {
        return new NextResponse(err.message, { status: 500 })
    }

}

// delete a record

export async function DELETE(request, { params }) {

    try {
        const id = params.id
        if (!id) {
            return NextResponse.json({ message: `No User found with ID ${id}`, code: 404 })

        } else {
            await prisma.user.delete({
                where: {
                    id
                }
            })
            return new NextResponse(null, { status: 204 })

        }
    }
    catch (err) {

    }
}