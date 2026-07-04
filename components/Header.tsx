import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="DG Business Intelligence home">
        <Image
          src="/assets/dgbi-logo.png"
          alt="DG Business Intelligence"
          width={825}
          height={225}
          priority
        />
      </a>

      <nav className="main-nav" aria-label="Hoofdnavigatie">
        <a href="/">Home</a>
        <a href="/diensten">Diensten</a>
        <a href="/werkwijze">Werkwijze</a>
        <a href="/over">Over</a>
        <a href="/#contact" className="nav-cta">
          Contact
        </a>
      </nav>
    </header>
  );
}