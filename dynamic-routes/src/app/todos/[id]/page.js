
// export default function TodosDetailPage(props) {
//     console.log(props)
//     return <>
//         <h1>Todos detail page</h1>
//         <h2>{props.params.id} details </h2>
//     </>
// }

export default function TodosDetailPage({params:{id}}) {
    //console.log(props)
    return <>
        <h1>Todos detail page</h1>
        <h2>{id} details </h2>
    </>
}