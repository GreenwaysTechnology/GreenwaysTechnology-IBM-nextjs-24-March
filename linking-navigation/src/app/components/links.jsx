'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import './link.css'

export function Links() {
    const pathname = usePathname()
    return <nav>
        <ul>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={{ pathname: '/' }}>Home</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href={{ pathname: '/about' }}>About</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/services' ? 'active' : ''}`} href={{ pathname: '/services' }}>Services</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href={{ pathname: '/dashboard' }}>Dashboard</Link>
            </li>
        </ul>
    </nav >
}