import Books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

async function AllBooks() {
  const allBooks: BookData[] = Books;
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return <AllBooks />;
}
