'use client'
import { useEffect } from "react"

//Error Component must be client Component
export default function Error({ error, reset }) {
    //log error
    useEffect(() => {
        //write logic to report error. you can error report to error reporting tools
        console.log(error)
    }, [error])

    return <>
        {/* Fallback ui incase error happened */}
        <div>
             <h1>Something went wrong! {error.message}</h1>
             <button onClick={()=>{
                reset()
             }}>Try</button>
        </div>
    </>

}