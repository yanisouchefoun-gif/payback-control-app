const subscriptions = [
  { name: 'Netflix', price: 15.99, cycle: 'mes', due: 'Cada 15 de mes', color: 'purple' },
  { name: 'Spotify', price: 10.99, cycle: 'mes', due: 'Cada 20 de mes', color: 'green' },
  { name: 'Adobe Creative Cloud', price: 59.99, cycle: 'mes', due: 'Cada 2 de mes', color: 'orange' },
  { name: 'Gympass', price: 29.99, cycle: 'mes', due: 'Cada 10 de mes', color: 'blue' }
];

const returns = [
  { brand: 'Amazon', item: 'Auriculares', deadline: 'En 3 días', status: 'Pendiente', amount: 79.9 },
  { brand: 'Zalando', item: 'Chaqueta', deadline: 'En 7 días', status: 'En revisión', amount: 119.0 },
  { brand: 'Nike', item: 'Zapatillas', deadline: 'En 12 días', status: 'Reembolsado', amount: 149.0 }
];

const warranties = [
  { item: 'iPhone 15 Pro', expires: '18/11/2027', status: 'Activa', plan: 'AppleCare+' },
  { item: 'Laptop Lenovo', expires: '09/04/2028', status: 'Activa', plan: 'Garantía extendida' },
  { item: 'Cámara Sony', expires: '26/02/2026', status: 'Próxima a caducar', plan: 'Garantía fabricante' }
];

const alerts = [
  'Tu suscripción de Adobe vence en 2 días.',
  'Tienes 2 devoluciones con fecha límite cercana.',
  'Tu garantía del móvil está activa y protegida.'
];

const premiumBenefits = [
  'Recordatorios inteligentes de renovaciones',
  'Alertas de devoluciones y garantías',
  'Resumen mensual del dinero protegido',
  'Cobertura de compras y alertas de riesgo'
];

const formatMoney = (amount) => new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
}).format(amount);

export default function App() {
  const monthlySpend = subscriptions.reduce((sum, item) => sum + item.price, 0);
  const protectedAmount = returns.reduce((sum, item) => sum + item.amount, 0) * 0.6;
  const activeAlerts = alerts.length;

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">P</div>
          <div>
            <p className="eyebrow">Finance personal</p>
            <h1>PaybackManager</h1>
          </div>
        </div>

        <button className="premium-button" type="button">
          Premium · 2,99€/mes
        </button>
      </header>

      <main className="dashboard">
        <section className="hero-card">
          <div>
            <p className="eyebrow neutral">Tu panel central</p>
            <h2>No pierdas dinero por despistes.</h2>
            <p className="hero-copy">
              Controla tus suscripciones, devoluciones y garantías desde un único lugar.
            </p>
          </div>

          <div className="hero-metric">
            <span>Dinero protegido</span>
            <strong>{formatMoney(protectedAmount)}</strong>
            <small>Hoy</small>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card accent">
            <span>Suscripciones</span>
            <strong>{subscriptions.length}</strong>
            <small>Activas</small>
          </article>

          <article className="stat-card">
            <span>Mensual</span>
            <strong>{formatMoney(monthlySpend)}</strong>
            <small>Gasto total</small>
          </article>

          <article className="stat-card">
            <span>Devoluciones</span>
            <strong>{returns.length}</strong>
            <small>En seguimiento</small>
          </article>

          <article className="stat-card">
            <span>Avisos</span>
            <strong>{activeAlerts}</strong>
            <small>Pendientes</small>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel">
            <div className="panel-header">
              <h3>Suscripciones</h3>
              <button type="button">+ Añadir</button>
            </div>

            <div className="subscription-list">
              {subscriptions.map((subscription) => (
                <div className="item-row" key={subscription.name}>
                  <div className="item-main">
                    <span className={`color-dot ${subscription.color}`} />
                    <div>
                      <strong>{subscription.name}</strong>
                      <small>{subscription.due}</small>
                    </div>
                  </div>
                  <div className="price-block">
                    <strong>{formatMoney(subscription.price)}</strong>
                    <small>{subscription.cycle}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <div className="panel-header">
              <h3>Devoluciones</h3>
              <button type="button">Ver todo</button>
            </div>

            <div className="return-list">
              {returns.map((item) => (
                <div className="return-card" key={`${item.brand}-${item.item}`}>
                  <div>
                    <strong>{item.brand}</strong>
                    <p>{item.item}</p>
                  </div>
                  <div className="return-meta">
                    <span className="status-pill">{item.status}</span>
                    <small>{item.deadline}</small>
                  </div>
                  <b>{formatMoney(item.amount)}</b>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel">
            <div className="panel-header">
              <h3>Garantías</h3>
              <button type="button">Gestionar</button>
            </div>

            <div className="list-stack">
              {warranties.map((item) => (
                <div className="warranty-row" key={item.item}>
                  <div>
                    <strong>{item.item}</strong>
                    <small>{item.plan}</small>
                  </div>
                  <div>
                    <b>{item.expires}</b>
                    <small className="status-text">{item.status}</small>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel premium-panel">
            <div className="panel-header">
              <h3>Payback Premium</h3>
              <span className="premium-badge">2,99 €/mes</span>
            </div>

            <ul className="feature-list">
              {premiumBenefits.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button type="button" className="cta-button">
              Activar Premium
            </button>
          </article>
        </section>

        <section className="panel alerts-panel">
          <div className="panel-header">
            <h3>Avisos pendientes</h3>
            <span className="count-badge">{activeAlerts}</span>
          </div>

          <ul className="alert-list">
            {alerts.map((alert) => (
              <li key={alert}>{alert}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
