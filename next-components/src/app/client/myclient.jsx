'use client'

// import MyServer from "./myserver"

export default function MyClient(props){
    return <div>
        <h1>Client component</h1>
        {/* <MyServer></MyServer> */}
        {props.children}
    </div>
}