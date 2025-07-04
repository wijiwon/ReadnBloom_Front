import { BookData } from "@/types";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  description,
  coverImgUrl,
}: BookData) {
  return (
    <div className="flex items-center p-4 border-b border-gray-200">
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
