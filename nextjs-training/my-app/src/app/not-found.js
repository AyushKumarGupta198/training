import Link from "next/link";

export default function NotFound() {
    
    return( 
    <div className="h-screen mt-28 ">
        <h1 className="text-xl font-bold text-center">Sorry..Page Not Found</h1>
        <Link href='/' className="text-blue-500 pl-[710px] text-xl font-bold underline">Go Home</Link>
    </div>
    )
  }