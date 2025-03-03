'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { signOut, useSession } from "next-auth/react";
import React from 'react'

function Header({request,response}) {
    const pathname=usePathname();
    const { data: session } = useSession();
    console.log(request);
    console.log(response)
  return (
    <div className='bg-gray-600 shadow-md h-16 flex items-center px-10 fixed top-0 left-0 w-full z-50'>
        <h1 className='text-yellow-200 text-xl font-bold '>NEXTAPP</h1>
        <nav className="ml-auto flex space-x-6">
          <Link href="/" className={`text-white hover:underline transition ${pathname === '/' ? "text-zinc-900" : ""}`}>Home</Link>
          <Link href="/posts" className={`text-white hover:underline transition ${pathname.startsWith("/posts") ? "text-zinc-900" : ""}`}>Posts</Link>
          {session?<button className='text-white hover:underline' onClick={() => signOut({ callbackUrl: "/login" })}>LogOut</button>:<Link href="/login" className={`text-white hover:underline transition ${pathname === '/login' ? "text-zinc-900" : ""}`}>Login</Link>}
        </nav>
    </div>
  )
}

export default Header