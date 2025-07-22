export default function Page() {
  return (
    <div className="max-w-[500px] m-auto h-">
      <h1 className="text-moss-green text-3xl text-center my-3">login</h1>
      <div className="flex justify-center items-center gap-8 my-3">
        <div className="flex flex-col gap-3">
          <input
            className="h-10 border-1 border-gray-400 rounded-full p-4"
            placeholder="이메일"
          />
          <input
            className="h-10 border-1 border-gray-400 rounded-full p-4"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button className="bg-moss-green text-white py-3 px-8 rounded-lg hover:bg-sage-light cursor-pointer">
          로그인
        </button>
      </div>
    </div>
  );
}
