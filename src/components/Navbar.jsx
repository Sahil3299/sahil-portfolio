import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-brand">Sahil Shinde</div>

      <button className="nav-toggle" aria-label="menu" onClick={() => setOpen(!open)}>☰</button>

      <ul className={`nav-list ${open ? "open" : ""}`}>
        {["about", "skills", "projects", "contact"].map(item => (
          <li key={item} className="nav-item">
            <a href={`#${item}`} onClick={() => setOpen(false)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
