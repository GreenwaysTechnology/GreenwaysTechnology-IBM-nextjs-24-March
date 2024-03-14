

export default async function CachePage(props) {
    //with caching
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })
    const data = await response.json()

    return <>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </>
}