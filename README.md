:root {
  font-family: 'Inter', sans-serif;
  color: #f5f7fb;
  background:
    radial-gradient(circle at top left, rgba(61, 255, 165, 0.18), transparent 30%),
    linear-gradient(135deg, #07150f 0%, #0d1d1a 40%, #0c111e 100%);
  line-height: 1.5;
  font-weight: 400;
  color-scheme: dark;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  background: transparent;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 32px 20px 64px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 16px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-weight: 800;
  color: #061510;
  background: linear-gradient(135deg, #8df7c6 0%, #44d997 100%);
  box-shadow: 0 12px 30px rgba(65, 214, 148, 0.4);
}

h1,
h2,
h3,
p {
  margin: 0;
}

.eyebrow {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.7;
  margin-bottom: 6px;
}

.eyebrow.neutral {
  color: #9feccc;
}

h1 {
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  font-weight: 800;
}

.premium-button,
.panel-header button,
.cta-button {
  border: none;
  border-radius: 12px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.premium-button {
  padding: 12px 18px;
  color: #04180f;
  background: linear-gradient(135deg, #d3ffe8, #7ef0ba);
  font-weight: 700;
}

.premium-button:hover,
.panel-header button:hover,
.cta-button:hover {
  transform: translateY(-1px);
}

.dashboard {
  display: grid;
  gap: 24px;
}

.hero-card,
.panel,
.stat-card {
  background: rgba(15, 24, 32, 0.82);
  border: 1px solid rgba(155, 174, 188, 0.15);
  box-shadow: 0 12px 30px rgba(4, 10, 12, 0.2);
  backdrop-filter: blur(8px);
}

.hero-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-radius: 24px;
  padding: 28px 28px 20px;
}

.hero-card h2 {
  font-size: clamp(2rem, 4vw, 3.1rem);
  margin-bottom: 12px;
  max-width: 620px;
  line-height: 1.08;
}

.hero-copy {
  max-width: 560px;
  opacity: 0.82;
  font-size: 1.05rem;
}

.hero-metric {
  min-width: 210px;
  background: linear-gradient(135deg, rgba(18, 61, 47, 0.95), rgba(18, 36, 51, 0.9));
  border: 1px solid rgba(128, 255, 201, 0.25);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero-metric span,
.hero-metric small,
.stat-card span,
.stat-card small,
.item-row small,
.return-card p,
.return-meta small,
.warranty-row small,
.alert-list li {
  opacity: 0.8;
}

.hero-metric strong {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.stat-card {
  border-radius: 18px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(68, 217, 151, 0.15), rgba(12, 18, 30, 0.9));
}

.stat-card strong {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  line-height: 1.1;
}

.content-grid,
.bottom-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;
}

.panel {
  border-radius: 22px;
  padding: 22px 20px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.panel-header h3 {
  font-size: 1.15rem;
}

.panel-header button {
  background: rgba(160, 175, 190, 0.12);
  color: #edf6ff;
  padding: 9px 12px;
}

.subscription-list,
.return-list,
.list-stack,
.alert-list {
  display: grid;
  gap: 12px;
}

.item-row,
.warranty-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(176, 191, 207, 0.1);
}

.item-row:last-child,
.warranty-row:last-child {
  border-bottom: none;
}

.item-main {
  display: flex;
  align-items: center;
  gap: 14px;
}

.item-main div,
.warranty-row > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.color-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.color-dot.purple { background: #b57dff; }
.color-dot.green { background: #4de2a6; }
.color-dot.orange { background: #ffbf69; }
.color-dot.blue { background: #7dbaff; }

.price-block {
  min-width: 90px;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.return-card {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 12px;
  align-items: center;
  border: 1px solid rgba(163, 180, 196, 0.14);
  border-radius: 16px;
  background: rgba(13, 18, 26, 0.7);
  padding: 14px 16px;
}

.return-card p {
  margin-top: 4px;
  font-size: 0.9rem;
}

.return-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.status-pill,
.premium-badge,
.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.status-pill {
  background: rgba(133, 236, 171, 0.15);
  color: #7ef0ba;
  border: 1px solid rgba(126, 240, 186, 0.2);
  padding: 6px 10px;
}

.premium-panel {
  background: linear-gradient(180deg, rgba(22, 35, 43, 0.9), rgba(11, 20, 28, 0.95));
}

.premium-badge {
  padding: 6px 10px;
  background: rgba(255, 198, 92, 0.14);
  color: #ffd37a;
  border: 1px solid rgba(255, 198, 92, 0.22);
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 12px;
}

.feature-list li {
  position: relative;
  padding-left: 22px;
  color: rgba(244, 247, 252, 0.9);
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #7ef0ba;
  font-weight: 700;
}

.cta-button {
  width: 100%;
  padding: 14px 18px;
  background: linear-gradient(135deg, #7ef0ba, #57d4b4);
  color: #061a16;
  font-weight: 800;
}

.warranty-row {
  padding: 14px 0;
}

.status-text {
  color: #ffd37a;
}

.alerts-panel {
  padding: 20px 22px;
}

.count-badge {
  min-width: 28px;
  min-height: 28px;
  background: rgba(247, 76, 76, 0.15);
  border: 1px solid rgba(247, 76, 76, 0.2);
  color: #ff9d9d;
  padding: 0 8px;
}

.alert-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.alert-list li {
  position: relative;
  padding-left: 22px;
  border-left: 2px solid rgba(126, 240, 186, 0.3);
  padding-bottom: 10px;
  padding-left: 14px;
  margin-left: 6px;
}

.alert-list li::before {
  content: '•';
  position: absolute;
  left: -7px;
  top: 0;
  color: #7ef0ba;
  font-size: 1.3rem;
}

@media (max-width: 980px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .app-shell {
    padding: 20px 16px 50px;
  }

  .topbar,
  .hero-card,
  .item-row,
  .warranty-row,
  .return-card {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: stretch;
  }

  .topbar,
  .hero-card {
    display: flex;
  }

  .brand-wrap {
    width: 100%;
  }

  .premium-button {
    width: 100%;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .hero-card {
    padding: 22px 18px;
  }

  .return-card {
    display: flex;
    align-items: flex-start;
  }
}
