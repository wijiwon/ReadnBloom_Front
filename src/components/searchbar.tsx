export default function SearchBar() {
  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        검색
      </button>
    </div>
  );
}