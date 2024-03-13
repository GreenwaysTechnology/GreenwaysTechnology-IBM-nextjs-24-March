export default function DashboardPage() {

    const isvalid = true
    if (isvalid) {
        console.log('error')
        throw 'Dashboard Page is broken'
    }

    return <>
        <h1>Dashboard Page</h1>
    </>
}