//data fetching in server component using fetch 
export async function fetchTodos() {
    console.log('layout')

    try {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch(url)
        return response.json()
    }
    catch (err) {
        return err
    }

}
export default async function TodosLayout(props) {
    const todos = await fetchTodos()

    return <div>
        <h1>Total Todos {todos.length}</h1>
        {props.children}
    </div>
}