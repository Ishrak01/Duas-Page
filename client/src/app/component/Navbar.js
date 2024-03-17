import Image from "next/image";
import dot from "./dot.png";
import icon from "./icon.png";
import search from "./search.png";

const Navbar = () => {
  return (
    <div className="navbar mx-auto flex justify-between items-center sticky top-0 z-50 bg-white w-full p-6">
      <div className="flex items-center space-x-4">
        
        <p className="font-bold">Dua Page</p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          className="py-2 px-4 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-indigo-500"
          placeholder="Search by Dua Name"
        />
        <Image src={search} alt="Search Icon" className="w-10 h-10 ml-2" />
      </div>
      <div className="flex items-center space-x-4">
      <Image src={icon} className="w-10 h-10" />
        <Image src={dot} className="w-3 h-2" />

      </div>
    </div>
  );
}

export default Navbar;
