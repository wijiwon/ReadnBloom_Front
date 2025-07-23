"use client";
import { BookData } from "@/types";
import { useRouter } from "next/navigation";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  description,
  coverImgUrl,
}: BookData) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/book/${id}`);
  };

  return (
    <div
      className="flex items-center p-4 border-b border-gray-200"
      onClick={handleClick}
    >
      <img
        src={coverImgUrl}
        alt={title}
        className="w-16 h-24 object-cover mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">저자: {author}</p>
      </div>
    </div>
  );
}
