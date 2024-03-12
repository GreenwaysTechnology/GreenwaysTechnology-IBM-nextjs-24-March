import { PrismaClient } from "@prisma/client";

//Prisma client is object through which we can seed database
const prisma = new PrismaClient();

async function main() {
    //variable.modelname.api
    const user = await prisma.user.create({
        data: {
            name: 'admin',
            email: 'admin@ibm.com',
            role: 'admin'
        }
    })
    console.log('created', user)
}
main().then(() => prisma.$disconnect()).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit()
})