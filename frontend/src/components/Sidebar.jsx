import { MdOutlineLock } from "react-icons/md";
import { FaPenSquare } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";




const Sidebar = () => {
  return (
    <div className="py-4 px-4 flex-col bg-gray-800 text-white w-1/6 h-screen">
      <div className="flex justify-start items-center gap-2 border-b-2 border-gray-500 pb-4">
        <MdOutlineLock size={56} />
        <h1 className="text-md">
          <span className="text-amber-500 font-semibold text-2xl">Privy</span>{" "}
          <br /> Manager
        </h1>
      </div>
      <div>
        <ul className="mt-4 border-b-2 border-gray-500 pb-4 flex-col flex gap-2">
          <li className="py-2 px-2 hover:bg-gray-700 hover:text-amber-500 cursor-pointer flex gap-2 items-center text-md">
            <RxDashboard size={20} /> Dashboard
          </li>
          <li className="py-2 px-2 hover:bg-gray-700 hover:text-amber-500 cursor-pointer flex gap-2 items-center text-md">
            <MdFavoriteBorder size={20} /> Favorites
          </li>
          <li className="py-2 px-2 hover:bg-gray-700 hover:text-amber-500 cursor-pointer flex gap-2 items-center text-md">
          <CiTimer size={20} /> Recents
          </li>
          <li className="py-2 px-2 hover:bg-gray-700 hover:text-amber-500 cursor-pointer flex gap-2 items-center text-md">
            {" "}
            <FaUserCircle size={20} /> Account
          </li>
        </ul>
      </div>
      <div className="mt-2">
        <ul>
          <li className="py-2 px-2 hover:bg-gray-700 hover:text-amber-500 cursor-pointer flex gap-2 text-md">
            {<FaPenSquare size={26} />} Password Generator
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
