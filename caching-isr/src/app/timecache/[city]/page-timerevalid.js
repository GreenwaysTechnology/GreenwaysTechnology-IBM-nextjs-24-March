
//route segment config for revalidation
export const revalidate = 2

export default async function CachePage(props) {
    //with caching
    // const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { next: { revalidate: 2 } })

    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')

    const data = await response.json()

    return <>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </>
}