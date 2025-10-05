export default function Book({ book }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={book.image} alt={book.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.name}
          <div className="badge badge-secondary">{book.category}</div>
        </h2>
        <p>{book.review.slice(0, 256)}...</p>
        <ul className="card-actions justify-end">
          {book.tags.map((tag, i) => (
            <li key={i} className="badge badge-outline">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
