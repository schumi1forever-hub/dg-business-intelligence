import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DienstenPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section-shell services-page">
          <p className="eyebrow">Diensten</p>

          <h1>Van data naar bruikbare inzichten.</h1>

          <p className="lead">
            Organisaties beschikken vaak over veel data, maar missen het inzicht
            om de juiste beslissingen te nemen. DG Business Intelligence helpt om
            data om te zetten in betrouwbare managementinformatie waarop gestuurd
            kan worden.
          </p>

          <div className="workflow-text">
            <ul>
              <li>
                <strong>Dashboards &amp; managementinformatie.</strong>{" "} Power BI
                dashboards, KPI&apos;s en rapportages die direct antwoord geven
                op de belangrijkste managementvragen.
              </li>

              <li>
                <strong>Data samenbrengen.</strong> Gegevens uit ERP, CRM, Excel,
                SQL en andere bronnen combineren tot één betrouwbaar totaalbeeld.
              </li>

              <li>
                <strong>Datamodellering &amp; ETL.</strong> Structuur aanbrengen
                in data, zodat rapportages sneller, betrouwbaarder en beter
                onderhoudbaar worden.
              </li>

              <li>
                <strong>Optimalisatie.</strong> Verbeteren van bestaande Power BI
                oplossingen, datamodellen en rapportages die traag, onduidelijk
                of lastig te onderhouden zijn.
              </li>

              <li>
                <strong>Training &amp; coaching.</strong> Teams praktisch
                begeleiden in Power BI, SQL en datagedreven werken, zodat ze zelf
                betere inzichten kunnen maken en gebruiken.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}