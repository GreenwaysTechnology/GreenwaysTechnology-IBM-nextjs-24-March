// /products/a/1
export async function generateStaticParams() {
    return [
        {
            category: 'a', product: '1'
        },
        {
            category: 'b', product: '2'
        },
        {
            category: 'c', product: '3'
        },
        {
            category: 'd', product: '4'
        }
    ]
}
export default function Page({ params }) {
    const { category, product } = params

    return <>
        <h1>category {category}  Product {product}</h1>
    </>
}
