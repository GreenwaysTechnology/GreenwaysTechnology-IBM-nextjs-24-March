import { gql } from "@apollo/client";
import { getClient } from "./lib/client";


//Query creation using "gql function from the Apollo Client"
const query = gql`query getUsers {
  user {
    id
    lastName
    points
    status
    firstName
    age
  }      
}`
export default async function Home() {
  const { data: { user } } = await getClient().query({ query });
  console.log(user)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {user.map(tmpuser => {
            console.log(tmpuser)
            return <li key={tmpuser.id}>{tmpuser.id} - {tmpuser.firstName} {tmpuser.lastName} </li>
          })}
        </ul>
        {/* {JSON.stringify(user)} */}

      </div>
    </main>
  );
}
