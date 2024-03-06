'use client'
import { useRouter } from "next/navigation"
import { useSearchParams } from 'next/navigation'

export function DashBoardNavigator() {
    const router = useRouter()

   return <>
        <button onClick={() => {
            router.push('/dashboard')
        }}>Dashboard</button>

           </>
}