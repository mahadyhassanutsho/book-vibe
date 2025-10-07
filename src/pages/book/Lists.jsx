import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import useLocalStorage from "../../contexts/localStorage/useLocalStorage";
import BookGrid from "../../components/book/BookGrid";

export default function Lists() {
  const { readlist: readlistIds, wishlist: wishlistIds } = useLocalStorage();
  const books = useLoaderData();

  const [readlist, setReadlist] = useState(
    books.filter((book) => readlistIds.includes(book.id))
  );
  const [wishlist, setWishlist] = useState(
    books.filter((book) => wishlistIds.includes(book.id))
  );

  const [sort, setSort] = useState();

  const handleSort = (type) => {
    setSort(type);
  };

  useEffect(() => {
    switch (sort) {
      case "Pages":
        setReadlist((readlist) => [
          ...readlist.sort((a, b) => a.totalPages - b.totalPages),
        ]);
        setWishlist((wishlist) => [
          ...wishlist.sort((a, b) => a.totalPages - b.totalPages),
        ]);
        break;
      case "Rating":
        setReadlist((readlist) => [
          ...readlist.sort((a, b) => a.rating - b.rating),
        ]);
        setWishlist((wishlist) => [
          ...wishlist.sort((a, b) => a.rating - b.rating),
        ]);
        break;

      default:
        break;
    }
  }, [sort]);

  return (
    <Tabs>
      <TabList className="tabs tabs-box w-fit mx-auto">
        <Tab className="tab" selectedClassName="tab-active">
          Readlist
        </Tab>
        <Tab className="tab" selectedClassName="tab-active">
          Wishlist
        </Tab>
      </TabList>

      <div className="dropdown dropdown-start mx-auto">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort By: {sort === undefined ? "Default" : sort}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <button onClick={() => handleSort("Pages")}>Pages</button>
          </li>
          <li>
            <button onClick={() => handleSort("Rating")}>Rating</button>
          </li>
        </ul>
      </div>

      <TabPanel>
        <BookGrid books={readlist} />
      </TabPanel>
      <TabPanel>
        <BookGrid books={wishlist} />
      </TabPanel>
    </Tabs>
  );
}
