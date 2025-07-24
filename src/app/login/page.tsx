export default function Page() {
  return (
    <div className="max-w-[500px] h-full m-auto flex flex-col justify-center p-6">
      <h1 className="text-moss-green text-5xl text-center my-10">login</h1>
      <div className="grid grid-cols-10 items-center gap-8 my-3">
        <div className="flex flex-col gap-3 col-span-7 px-7">
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
        <button className="bg-moss-green text-white col-span-3 py-3 px-8 rounded-lg hover:bg-sage-light cursor-pointer">
          로그인
        </button>
      </div>
    </div>
  );
}
