
export async function getUsers() {
    const url = `${process.env.HOST}/users`
    const response = await fetch(url)
    return response.json()
}

export default async function UserPage() {
    const users = await getUsers()
    return <main className="flex  flex-col justify-between p-24">
        <h1>User Page</h1>
        <ul>
            {
                users.map(user => {
                    return <li key={user.id}>
                        <span>{user.name}</span>-<span>{user.id}</span> <span style={{color:'red'}}>※</span>
                    </li>
                })
            }
        </ul>
    </main>
}