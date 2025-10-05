import Book from "./Book";

export default function BookGrid({ books }) {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-center">All Books</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-5">
        {books.map((book, i) => (
          <li key={i}>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}
