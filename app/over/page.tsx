import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function OverPage() {
  return (
    <>
      <Header />

      <main>
        <section className="section-shell services-page about-page">
          <div className="about-page-copy">
         

            <h1>De brug tussen business, data en techniek.</h1>

            <p className="lead">
              Ik ben Tim de Goede, Business Intelligence consultant, trainer en
              HBO-ICT docent. Ik help organisaties om data om te zetten in
              inzichten die leiden tot betere beslissingen.
            </p>

            <p className="lead">
              Door mijn ervaring in zowel de praktijk als het onderwijs weet ik
              complexe onderwerpen terug te brengen naar heldere keuzes,
              begrijpelijke modellen en dashboards die echt ondersteunen bij
              besluitvorming.
            </p>
          </div>

          <div className="about-page-photo">
            <Image
              src="/assets/tim-de-goede.jpg"
              alt="Tim de Goede"
              width={420}
              height={420}
              priority
            />
          </div>

          <div className="workflow-text about-page-list">
            <ul>
              <li>
                <strong>Praktische BI-ervaring.</strong> Ik werk met Power BI,
                SQL, datamodellering en rapportages die organisaties helpen om
                beter te sturen.
              </li>

              <li>
                <strong>Trainer en docent.</strong> Als HBO-ICT docent en
                trainer ben ik gewend om complexe materie helder uit te leggen
                en mensen stap voor stap mee te nemen.
              </li>

              <li>
                <strong>Business én techniek.</strong> Ik kijk niet alleen naar
                de data, maar ook naar de vraag achter de vraag: welke beslissing
                moet beter ondersteund worden?
              </li>

              <li>
                <strong>Duurzame oplossingen.</strong> Of het nu gaat om een
                dashboard, datamodel of BI-aanpak: het doel is een oplossing die
                begrijpelijk, betrouwbaar en onderhoudbaar blijft.
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}