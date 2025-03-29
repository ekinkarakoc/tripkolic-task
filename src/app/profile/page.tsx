import { FaUser, FaUserTag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";

export default function ProfilePage() {
  return (
    <div className="w-full flex  justify-center">
      <div className="flex flex-row gap-8 mt-4 top-0">
        <div className="flex text-sm justify-center items-center gap-1 text-[#ef9225] border-b-2">
          <FaUser /> Profile
        </div>
        <div className="flex text-sm justify-center items-center gap-1 border-b-2">
          <FaUserGroup /> Users
        </div>
        <div className="flex text-sm justify-center items-center gap-1 border-b-2">
          <AiFillProduct /> Products
        </div>
        <div className="flex text-sm justify-center items-center gap-1 border-b-2">
          <FaUserTag /> Sellers
        </div>
      </div>
    </div>
  );
}
