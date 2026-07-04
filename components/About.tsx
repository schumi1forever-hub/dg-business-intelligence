import Image from "next/image";

export default function About() {
  return (
    <section id="over" className="about section-shell">
      <div className="portrait-wrap">
        <Image
          src="/assets/tim-de-goede.jpg"
          alt="Tim de Goede"
          width={320}
          height={320}
        />
      </div>
      <div className="about-copy">
        <p className="eyebrow">Over Tim</p>
        <h2>Consultant, trainer en HBO-ICT docent.</h2>
        <p>
          Ik help organisaties om data om te zetten in bruikbare inzichten.
          Daarbij combineer ik technische kennis van Power BI, SQL en
          datamodellering met ervaring in het uitleggen en begeleiden van mensen.
        </p>
        <div className="badges">
          <span>25+ jaar IT-ervaring</span>
          <span>Microsoft Certified Power BI Data Analyst</span>
          <span>HBO-ICT docent</span>
        </div>
      </div>
    </section>
  );
}
