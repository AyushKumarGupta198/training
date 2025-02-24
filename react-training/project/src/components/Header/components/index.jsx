import Sidebar from "../../SideNavbar/components";
import { useSelector } from 'react-redux';

const Header = () => {
  const {coins}=useSelector((state)=>state.coins)
  return (
    <header className="bg-gray-900 border border-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <Sidebar/>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <div className="pl-10">🪙{coins}</div>
        
        <h1 className="text-2xl font-bold cursor-pointer">Ayush</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-lg hover:text-yellow-400 hover:underline ">Home</a>
          <a href="/about" className="text-lg hover:text-yellow-400 hover:underline">About</a>
          <a href="/contact" className="text-lg hover:text-yellow-400 hover:underline">Contact</a>
          <a href="/login" className="text-lg hover:text-yellow-400 hover:underline">Login</a>
          <a href="/signup" className="text-lg hover:text-yellow-400 hover:underline">Signup</a>
        </nav>

        <div className="md:hidden">
          <button className="focus:outline-none text-lg">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;