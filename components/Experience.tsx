const companies = ["Thermo Fisher", "ABN AMRO", "Rabobank", "Heineken", "Unilever"];

export default function Experience() {
  return (
    <section className="experience section-shell">
      <p className="eyebrow centered">Ervaring opgedaan bij onder andere</p>
      <div className="logos">
        {companies.map((company) => (
          <span key={company}>{company}</span>
        ))}
      </div>
    </section>
  );
}
