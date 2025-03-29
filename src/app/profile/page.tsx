import { FaUser, FaUserTag } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { MdLocalPostOffice } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center bg-gray-200 ">
      <div className="flex flex-row gap-8 mt-4 top-0 justify-center">
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
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-8   px-4 w-full max-w-9xl m-auto">
        <div className="flex flex-col  gap-4 w-full  p-4 bg-white rounded-lg shadow border-amber-500 border-1">
          <p>Company Details</p>
          <div className="flex flex-row gap-4">
            <div className="flex justify-center items-center sm:justify-start">
              <FaUser className="w-20 h-20 text-[#ef9225]" />
            </div>

            <div className="flex flex-col gap-3 flex-1">
              {[
                ["Operator ID", "23123123123123"],
                ["Company Number", "23123123123123"],
                ["Legal Name", "Kamil Koç co.ltd"],
                ["TAT Number", "23 / 123123123123"],
                ["VAT Number", "2312312312312312312"],
                [
                  "Address",
                  "Atatürk Bulvarı 1234 sokak Ayden Apartmanı No:23 Gayrettepe İstanbul",
                ],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-xs md:text-sm text-gray-700"
                >
                  <p className="font-medium text-gray-600">{label}:</p>
                  <p className="text-right max-w-[60%] break-words">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col  gap-4 w-full p-4 bg-white rounded-lg shadow border-amber-500 border-1">
          <p>Bank Details</p>
          <div className="flex flex-col gap-3 flex-1">
            {[
              [
                "Account Type",
                "Bireysel/Şirket Hesabı ikisinden biri seçilecek",
              ],
              ["Bank Name", "Kasikorn Bankası 15 tane banka ismi olacak"],
              ["Account Name", "Hakan Kızılkaya"],
              ["Account Number", "1234567890"],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs md:text-sm text-gray-700"
              >
                <p className="font-medium text-gray-600">{label}:</p>
                <p className="text-right max-w-[60%] break-words">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-4 w-full p-4 bg-white rounded-lg shadow border-amber-500 border-1">
          <p>Contact Details</p>
          <div className="flex flex-col gap-3 flex-1">
            {[
              ["Company Owner Name", "Hakan Kızılkaya"],
              ["Phone Number", "+905555370032"],
              ["Office Phone Number", "+905555370032"],
              ["Office Phone Number", "+905555370032"],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs md:text-sm text-gray-700"
              >
                <p className="font-medium text-gray-600">{label}:</p>
                <p className="text-right max-w-[60%] break-words">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col  gap-4 w-full p-4 bg-white rounded-lg shadow border-amber-500 border-1">
          <p>Settings</p>
          <div className="flex flex-col gap-3 flex-1">
            {[
              ["Change Password", "**************"],
              ["Change Mail", "ekinkarakoc1@gmail.com"],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="flex justify-between text-xs md:text-sm text-gray-700"
              >
                <p className="font-medium text-gray-600">{label}:</p>
                <p className="text-right max-w-[60%] break-words">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mb-24 mt-12 gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-center gap-2 py-2 px-6 bg-[#ef9225] text-white rounded"
        >
          <MdLogout className="w-6 h-6" />
          Logout
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white h-16 flex flex-row items-center justify-around text-gray-600 shadow-md">
        <div className="flex flex-col items-center justify-center gap-1">
          <FaGripLines />
          <p>Bookings</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <FaFileInvoice /> <p>Invoice</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <MdLocalPostOffice /> <p>Messages</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
          <BiSolidReport /> <p>Report</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 text-[#ef9225]">
          <FaUser /> <p>Profile</p>
        </div>
      </div>
    </div>
  );
}
