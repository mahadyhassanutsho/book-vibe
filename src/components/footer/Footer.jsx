import { Facebook, Youtube, Twitter } from "lucide-react";

import book from "../../assets/book.ico";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <img src={book} alt="" />
        <p>
          Utsho MH
          <br />
          Coding Shits Since Forever.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a>
            <Twitter />
          </a>
          <a>
            <Youtube />
          </a>
          <a>
            <Facebook />
          </a>
        </div>
      </nav>
    </footer>
  );
}
