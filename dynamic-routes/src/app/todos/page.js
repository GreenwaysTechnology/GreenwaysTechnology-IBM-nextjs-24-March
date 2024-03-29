import Link from "next/link"
import { TODOS } from "./mock-data/todos"

export default function TodosMasterPage() {
    return <>
        <h1>Todos Master</h1>
        <ul>
            {
                TODOS.map(todo => {
                    return <li>
                        <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                })
            }
        </ul>
    </>
}