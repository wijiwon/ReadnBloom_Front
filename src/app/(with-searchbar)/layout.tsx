import SearchBar from "@/components/searchbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchBar />
      <div className="border-amber-700 border-2 m-auto max-w-11/12">
        {children}
      </div>
    </>
  );
}
