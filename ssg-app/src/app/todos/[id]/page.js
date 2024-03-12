export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
export async function fetchTodosById(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}
export default async function TodosDetailPage(props) {
    const todo = await fetchTodosById(Number(props.params.id))
    return <>
        <h2>id {todo.id}</h2>
        <p> title {todo.title}</p>
        <p> Status {todo.completed ? '✔' : '🚩'}</p>
    </>
}

//override function which is called during build time in order to prepare the page...

export async function generateStaticParams() {

    const todos = await fetchTodos();
    //generate html pages for all todos , if you have 200 records, 200 html files would be generated
    return todos.map(todo => {
        //based on id only the pages are generated, id value must be string always
        let id = todo.id.toString()
        return {
            id: id
        }

    })
}