export default function Page() {
  return (
    <div className="max-w-[500px] m-auto border-2 ">
      <h1>login</h1>
      <div className="border-2 flex flex-col justify-center items-center gap-2">
        <input
          className="h-10 border-1 border-gray-400 rounded-full p-4"
          placeholder="이메일"
        />
        <input
          className="h-10 border-1 border-gray-400 rounded-full p-4"
          type="password"
          placeholder="비밀번호"
        />
        <button>로그인</button>
      </div>
    </div>
  );
}
