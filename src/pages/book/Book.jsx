import { toast } from "react-toastify";
import { useLoaderData, useParams } from "react-router";
import {
  Star,
  BookOpen,
  BookOpenCheck,
  BookmarkPlus,
  BookmarkCheck,
} from "lucide-react";

import useLocalStorage from "../../contexts/localStorage/useLocalStorage";

export default function Book() {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.id === id);

  const { readlist, wishlist, addToReadlist, addToWishlist } =
    useLocalStorage();

  const onTheReadlist = readlist.includes(book.id);
  const onTheWishlist = wishlist.includes(book.id);

  const handleAddToReadlist = () => {
    if (onTheReadlist) {
      toast.info(`${book.name} is already in the Readlist`);
    } else {
      addToReadlist(book.id);
    }
  };

  const handleAddToWishlist = () => {
    if (onTheWishlist) {
      toast.info(`${book.name} is already on the Wishlist`);
    } else {
      addToWishlist(book.id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Book Image */}
        <figure className="bg-base-200 rounded-xl p-4 flex items-center justify-center">
          <img
            src={book.image}
            alt={book.name}
            className="max-h-[450px] object-contain rounded-xl"
          />
        </figure>

        {/* Book Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">{book.name}</h1>
            <p className="text-lg text-gray-600">by {book.author}</p>
          </div>

          <p className="leading-relaxed">{book.review}</p>

          <div className="flex flex-wrap gap-3">
            {book.tags.map((tag, i) => (
              <span key={i} className="badge badge-outline">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8 text-sm">
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>Published:</strong> {book.yearOfPublishing}
            </p>
            <p>
              <strong>Pages:</strong> {book.totalPages}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">{book.rating}</span>
            <Star size={18} className="text-yellow-500" />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="btn btn-primary" onClick={handleAddToReadlist}>
              {onTheReadlist ? <BookOpenCheck /> : <BookOpen />}{" "}
              <span>{onTheReadlist ? "Read" : "Mark as Read"}</span>
            </button>
            <button className="btn btn-outline" onClick={handleAddToWishlist}>
              {onTheWishlist ? <BookmarkCheck /> : <BookmarkPlus />}{" "}
              <span>{onTheReadlist ? "Wishlisted" : "Add to Wishlist"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
