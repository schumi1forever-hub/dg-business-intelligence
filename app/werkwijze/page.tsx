import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function WerkwijzePage() {
  return (
    <>
      <Header />

      <main>
        <section className="section-shell services-page">
          <p className="eyebrow">Werkwijze</p>

          <h1>Business Intelligence begint niet met dashboards.</h1>

          <p className="lead">
            Veel organisaties denken dat ze vooral een dashboard nodig hebben.
            Maar meestal begint goede Business Intelligence bij een veel
            belangrijkere vraag: welke beslissing wil je eigenlijk beter kunnen
            nemen?
          </p>

          <p className="lead">
            Daarom start DG Business Intelligence niet met een dashboard, maar met het
            begrijpen van het probleem, de organisatie en de informatiebehoefte.
            Pas daarna kijken we naar data. Het dashboard is de laatste stap.
          </p>

          <div className="workflow-text">
            <ul>
              <li>
                <strong>Het vraagstuk begrijpen.</strong> We brengen eerst de
                doelstellingen, processen en beslissingen in beeld. Niet: welke
                grafiek wil je? Maar: welk inzicht heb je nodig om beter te
                kunnen sturen?
              </li>

              <li>
                <strong>Data verzamelen en structureren.</strong>{" "}
                Daarna kijken we welke data beschikbaar is, bijvoorbeeld uit ERP,
                CRM, Excel, SQL Server of API&apos;s. We beoordelen de kwaliteit
                en brengen data samen in een betrouwbaar model.
              </li>

              <li>
                <strong>Inzichten creëren.</strong> Pas wanneer de data klopt,
                bouwen we rapportages en dashboards die direct antwoord geven op
                de belangrijkste vragen.
              </li>

              <li>
                <strong>Samen verbeteren.</strong> Business Intelligence is geen
                eenmalig project. We verbeteren op basis van feedback, nieuwe
                vragen en veranderende processen.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}