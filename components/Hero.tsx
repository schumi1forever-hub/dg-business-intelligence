const sources = ["ERP", "CRM", "Excel", "SQL", "API"];

export default function Hero() {
  return (
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">DG Business Intelligence</p>
        <h1>Van data naar beslissingen.</h1>
        <p className="lead">
          Wij brengen data uit verschillende bronnen samen en vertalen deze naar
          betrouwbare stuurinformatie.
        </p>
        <div className="actions">
          <a className="button primary" href="mailto:tim_de_goede@yahoo.com">
            Plan een kennismaking
          </a>
          <a className="button ghost" href="/werkwijze">
            Onze werkwijze
          </a>
        </div>
      </div>

      <div className="hero-flow" aria-label="Databronnen naar dashboard">
        <div className="source-list" aria-hidden="true">
          {sources.map((source) => (
            <span key={source}>{source}</span>
          ))}
        </div>

        <svg className="data-lines" viewBox="0 0 620 360" aria-hidden="true">
          <defs>
            <linearGradient id="flow" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#0b4da2" stopOpacity="0.15" />
              <stop offset="0.62" stopColor="#0b4da2" stopOpacity="0.34" />
              <stop offset="1" stopColor="#f2b500" stopOpacity="0.62" />
            </linearGradient>
          </defs>
          <path d="M42 48 C175 48 218 148 330 178 C398 196 435 128 570 118" />
          <path d="M42 112 C174 112 220 162 330 178 C406 188 440 160 570 158" />
          <path d="M42 178 C185 178 226 178 330 178 C405 178 440 178 570 178" />
          <path d="M42 244 C174 244 220 194 330 178 C406 168 440 204 570 202" />
          <path d="M42 308 C175 308 218 208 330 178 C398 158 435 238 570 238" />
          <circle cx="330" cy="178" r="7" className="line-hub" />
        </svg>

        <div className="dashboard-shell">
          <div className="bi-dashboard">
            <div className="dashboard-header">
              <div>
                <span className="dashboard-kicker">Management dashboard</span>
                <strong>Commercieel overzicht</strong>
              </div>
              <span className="status-pill">Live</span>
            </div>

            <div className="dashboard-kpis">
              <article>
                <small>Omzet</small>
                <strong>€248K</strong>
                <em>+12,4%</em>
              </article>
              <article>
                <small>Marge</small>
                <strong>38%</strong>
                <em>+4,1%</em>
              </article>
              <article>
                <small>KPI-score</small>
                <strong>92%</strong>
                <em>op koers</em>
              </article>
            </div>

            <div className="dashboard-grid">
              <article className="chart-panel revenue-panel">
                <div className="panel-title">
                  <strong>Resultaat per maand</strong>
                  <small>2026</small>
                </div>
                <div className="bar-chart" aria-hidden="true">
                  <i style={{ height: "42%" }} />
                  <i style={{ height: "64%" }} />
                  <i style={{ height: "53%" }} />
                  <i style={{ height: "76%" }} />
                  <i style={{ height: "68%" }} />
                  <i style={{ height: "88%" }} />
                </div>
              </article>

              <article className="chart-panel quality-panel">
                <div className="panel-title compact">
                  <strong>Datakwaliteit</strong>
                  <small>97%</small>
                </div>
                <div className="donut" aria-hidden="true" />
                <div className="quality-lines" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </article>
            </div>

            <div className="dashboard-footer">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
