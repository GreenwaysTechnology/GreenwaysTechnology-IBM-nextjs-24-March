export async function generateStaticParams() {
    return [
        { slug: ['a', '1'] },
        { slug: ['b', '2'] },
        { slug: ['c', '3'] }

    ]
}
export default function Page({ params }) {
    const { slug } = params
     console.log(slug)
    return <>
        {slug}
    </>
}