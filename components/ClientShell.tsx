"use client";

import { useState } from "react";
import Header from "./Header";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header onContactClick={() => setOpen(true)} />

      {/* PAGINA CONTENT */}
      {children}

      {/* CONTACT MODAL */}
      {open && (
        <div
          className="contact-modal"
          onClick={() => setOpen(false)}
        >
          <div
            className="contact-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Contact</h2>

            <p>
              Neem eenvoudig contact op via e-mail of telefoon.
            </p>

            {/* EMAIL */}
            <a
              href="mailto:info@dg-business-intelligence.nl"
              className="modal-btn"
            >
              📧 E-mail
            </a>

            {/* TELEFOON */}
            <a
              href="tel:+31612345678"
              className="modal-btn"
            >
              📞 Bellen
            </a>

            {/* SLUITEN */}
            <button
              className="modal-close"
              onClick={() => setOpen(false)}
            >
              Sluiten
            </button>
          </div>
        </div>
      )}
    </>
  );
}