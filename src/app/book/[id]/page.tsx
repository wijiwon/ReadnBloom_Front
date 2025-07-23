import AllBooks from "@/mock/books.json";
import { BookData } from "@/types";

const BookDetail = async ({ bookId }: { bookId: string }) => {
  const allbooks: BookData[] = AllBooks;

  const book = allbooks.find((el) => {
    return el.id == Number(bookId);
  });
  return (
    <>
      <div className="flex flex-col">
        <div>{book?.title}</div>
        <div className="flex">
          <img alt={book?.title} src={book?.coverImgUrl} />
          <div>
            <p>작가: {book?.author}</p>
            <p>출판사: {book?.publisher}</p>
            <p>{book?.subTitle}</p>
            <p>{book?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default async function Page({ params }: { params: { id: string } }) {
  //   console.log(params.id);
  const { id } = await params;
  return <BookDetail bookId={id} />;
}
