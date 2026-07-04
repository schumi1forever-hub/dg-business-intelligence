const services = [
  ["Inzicht creëren", "Power BI dashboards en managementinformatie."],
  ["Data verbinden", "SQL, ETL en datawarehouses."],
  ["Kennis delen", "Trainingen, coaching en workshops."],
  ["Samen verbeteren", "Consultancy en tijdelijke ondersteuning."],
];

export default function Services() {
  return (
    <section id="diensten" className="services section-shell">
      <div className="section-heading centered narrow">
        <p className="eyebrow">Diensten</p>
        <h2>Praktische hulp bij data, BI en Power BI.</h2>
      </div>
      <div className="cards four">
        {services.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
