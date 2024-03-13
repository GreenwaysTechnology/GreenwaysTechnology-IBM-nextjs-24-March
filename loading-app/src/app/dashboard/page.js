import React, { Suspense } from "react"

const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('./components/greeter'))
    })
})

export default function DashBoardPage() {

    // return <>
    //     <Welcome/>
    // </>
    return <>
        <h1>DashBoard Page</h1>
        {/* <Welcome/> */}
        <Suspense fallback={<h1>Loading⛳</h1>}>
            <Welcome/>
        </Suspense>
        <h1>Something else</h1>
        <h1>Something else</h1>
        <h1>Something else</h1>
        <h1>Something else</h1>
        <h1>Something else</h1>
        <h1>Something else</h1>

    </>
}