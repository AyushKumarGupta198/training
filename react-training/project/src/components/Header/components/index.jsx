import Sidebar from "../../SideNavbar/components";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className=""><Sidebar/></div>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className=""></div>
        
        <h1 className="text-2xl font-bold cursor-pointer">Ayush</h1>

        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="text-lg hover:text-yellow-400 hover:underline ">Home</a>
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