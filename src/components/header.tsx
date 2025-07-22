"use client";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  const router = useRouter();

  const handleClick_home = () => {
    router.push("/");
  };

  const handleClick_login = () => {
    router.push("/login");
  };
  return (
    <header className="border-red-600 border-2 h-20 m-auto p-2 flex items-center justify-between max-w-11/12">
      <h1
        className="font-['BookkMyungjo-Bd'] text-3xl text-deep-forest cursor-pointer"
        onClick={handleClick_home}
      >
        읽다:봄
      </h1>
      <div>
        <FaUser
          className="cursor-pointer deep-forest"
          color="#3c6255"
          size={30}
          onClick={handleClick_login}
        />
      </div>
    </header>
  );
};
