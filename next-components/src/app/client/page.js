import MyClient from "./myclient";
import MyServer from "./myserver";

export default function ClientPage() {
    return <>
        <h1>Client Page</h1>
        <MyClient>
            {/* sending server as prop  */}
            <MyServer/>
        </MyClient>
    </>
}