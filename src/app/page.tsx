"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.tripkolic.com/api/v1/task/login",
        {
          userId,
          password,
        }
      );

      if (response.data.status === true) {
        router.push("/profile");
      } else {
        alert("Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
      }
    } catch (error) {
      console.error("Login hatası:", error);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  bg-gray-200  flex flex-col items-center justify-center p-8 pb-28">
      <form onSubmit={handleLogin} className="p-6 w-full max-w-md space-y-4">
        <Image
          src="/orca.png"
          width={200}
          height={200}
          alt="orca-png"
          priority
          className="m-auto w-[200px] h-[100px] object-contain"
        />

        <h2 className="text-2xl font-bold text-center text-[#ef9225] mb-10">
          LOG IN
        </h2>

        <div className="flex items-center border rounded px-3 py-2 bg-white">
          <FaUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full focus:outline-none"
            required
          />
        </div>

        <div className="flex items-center border rounded px-3 py-2 bg-white">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-[#ef9225] text-white py-2 rounded hover:bg-[#ef6c00] transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Log In"}
        </button>

        <p className="underline">Forgot Password</p>
      </form>
      <div className="p-6 mx-12 fixed bottom-0 w-full flex-grow flex-col max-w-[400px] space-y-4 bg-white mt-30 rounded-2xl text-center">
        <p className="text-[#ef9225]"> Register As</p>
        <div className="flex flex-row justify-center gap-12">
          <button className="w-28 bg-[#0288d1] px-4 py-2 rounded-2xl text-white cursor-pointer">
            Operator
          </button>
          <button className="w-28 bg-[#0288d1] px-4 py-2 rounded-2xl text-white cursor-pointer">
            Seller
          </button>
        </div>
      </div>
    </div>
  );
}
