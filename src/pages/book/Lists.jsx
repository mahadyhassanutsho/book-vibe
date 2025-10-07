import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import useLocalStorage from "../../contexts/localStorage/useLocalStorage";
import BookGrid from "../../components/book/BookGrid";

export default function Lists() {
  const { readlist: readlistIds, wishlist: wishlistIds } = useLocalStorage();
  const books = useLoaderData();

  const readlist = books.filter((book) => readlistIds.includes(book.id));
  const wishlist = books.filter((book) => wishlistIds.includes(book.id));

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

      <TabPanel>
        <BookGrid books={readlist} />
      </TabPanel>
      <TabPanel>
        <BookGrid books={wishlist} />
      </TabPanel>
    </Tabs>
  );
}
