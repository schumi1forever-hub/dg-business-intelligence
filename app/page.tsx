import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        <section className="section-shell home-hero">
          <div className="home-hero-copy">
            <h1>
              Inzicht begint niet met data, maar met de juiste vragen.
            </h1>

            <p className="lead">
              Samen brengen we eerst de informatiebehoefte in kaart.{" "}
              <strong>
                Welke informatie heb je nodig om betere beslissingen te nemen?
              </strong>{" "}
              Vervolgens bepalen we welke data nodig is om deze vragen te
              beantwoorden. Pas daarna vertalen we de inzichten naar een passende
              oplossing, zoals een dashboard, rapportage of analyse.
            </p>
          </div>

          <div className="home-hero-visual">
            <Image
              src="/assets/etl-diagram.png"
              alt="Van vraagstuk via data naar inzicht"
              width={1200}
              height={700}
              priority
            />
          </div>
        </section>

        <section className="section-shell home-pillars">
          <article>
            <h2>Eerst de vraag</h2>
            <p>
              We beginnen niet met techniek, maar met het begrijpen van de
              organisatie en de informatiebehoefte.
            </p>
          </article>

          <article>
            <h2>Dan de data</h2>
            <p>
              De juiste data wordt verzameld, gecontroleerd en samengebracht tot
              een betrouwbare basis voor analyse.
            </p>
          </article>

          <article>
            <h2>Daarna het inzicht</h2>
            <p>
              De uitkomst is een oplossing die ondersteunt bij betere
              besluitvorming. Soms is dat een dashboard, soms een rapportage of
              analyse.
            </p>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
