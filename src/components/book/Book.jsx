import { Star } from "lucide-react";
import { Link } from "react-router";

export default function Book({ book }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="h-60">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-auto object-contain"
        />
      </figure>
      <div className="card-body gap-5">
        <h2 className="card-title">
          <Link to={`/book/${book.id}`}>{book.name}</Link>
          <div className="badge badge-secondary">{book.yearOfPublishing}</div>
        </h2>
        <p>{book.review.slice(0, 150)}...</p>
        <ul className="card-actions justify-end">
          {book.tags.map((tag, i) => (
            <li key={i} className="badge badge-outline">
              {tag}
            </li>
          ))}
        </ul>
        <div className="divider my-0"></div>
        <ul className="card-actions justify-end flex items-center gap-5">
          <li>
            <p>{book.category}</p>
          </li>
          <li className="flex items-center gap-2">
            <span>{book.rating}</span>
            <Star size={16} />
          </li>
        </ul>
      </div>
    </div>
  );
}
