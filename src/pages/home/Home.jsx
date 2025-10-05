import { useLoaderData } from "react-router";

import Banner from "../../components/banner/Banner";
import BookGrid from "../../components/book/BookGrid";

export default function Home() {
  const books = useLoaderData();

  return (
    <div className="space-y-10">
      <Banner />
      <BookGrid books={books} />
    </div>
  );
}
