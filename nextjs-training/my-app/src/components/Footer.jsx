const Footer = ({ companyName }) => {
    return (
        <footer className="bg-black text-white p-5 mt-auto w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Copyright Text */}
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          
          {/* Links Section */}
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;