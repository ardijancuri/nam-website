import Link from "next/link";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const importance = [
  {
    number: "01",
    title: "Turizmi",
    text: "Gastronomia ndikon në vendimin e vizitorëve për të qëndruar më gjatë.",
  },
  {
    number: "02",
    title: "Ekonomia lokale",
    text: "Bizneset krijojnë vende pune dhe kontribuojnë në të ardhurat e komunës.",
  },
  {
    number: "03",
    title: "Kultura",
    text: "Ushqimi tradicional lidh brezat dhe tërheq turistët kulturorë.",
  },
  {
    number: "04",
    title: "Hapësira publike",
    text: "Kafetë dhe restorantet aktivizojnë hapësirat historike të qytetit.",
  },
  {
    number: "05",
    title: "Vizitorët",
    text: "Përvoja gastronomike formëson kënaqësinë dhe imazhin e Prizrenit.",
  },
];

const priorities = [
  "Qasja dhe parkimi",
  "Menaxhimi i hapësirës publike",
  "Trajnimi dhe profesionalizmi i stafit",
  "Komunikimi institucional",
  "Produktet vendore dhe eventet",
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <SiteHeader tone="dark" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <p className="eyebrow hero-enter hero-enter-1">
            Instituti për Turizëm dhe Kulturë · Kosovë
          </p>
          <h1 className="hero-enter hero-enter-2">
            Njohuri që i japin
            <br />
            drejtim turizmit.
          </h1>
          <p className="hero-lead hero-enter hero-enter-3">
            Të dhëna, analiza dhe ekspertizë për destinacione me identitet,
            përvoja më të mira dhe zhvillim të qëndrueshëm.
          </p>
          <div className="hero-actions hero-enter hero-enter-4">
            <Link className="button button-light" href="/hulumtimi">
              Shfleto hulumtimin <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link text-link-light" href="/rreth-nesh">
              Njihuni me NAM <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="hero-index-line" />
          <span>2026</span>
        </div>
      </section>

      <main id="main">
        <section className="section publication-intro">
          <Reveal className="publication-heading">
            <p className="section-label">Hulumtimi i fundit</p>
            <h2>
              Vlerësimi i gastronomisë
              <br />
              në Qendrën Historike të Prizrenit
            </h2>
          </Reveal>

          <Reveal className="publication-summary" delay={100}>
            <p className="large-copy">
              Analizë statistikore e zgjeruar, e bazuar në të dhënat reale të
              40 bizneseve gastronomike.
            </p>
            <p>
              Sektori është funksional dhe relativisht stabil, por përballet
              me kufizime strukturore dhe mjedisore që e pengojnë zhvillimin në
              një nivel më të lartë.
            </p>
            <Link className="text-link" href="/hulumtimi">
              Lexo analizën e plotë <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <div className="publication-metrics" aria-label="Të dhënat kryesore">
            <Reveal delay={40}>
              <span className="metric-value">40</span>
              <span className="metric-label">biznese në mostër</span>
            </Reveal>
            <Reveal delay={100}>
              <span className="metric-value">~80%</span>
              <span className="metric-label">mbulim i sektorit në zonë</span>
            </Reveal>
            <Reveal delay={160}>
              <span className="metric-value">36</span>
              <span className="metric-label">ditë punë në terren</span>
            </Reveal>
          </div>
        </section>

        <section className="section data-feature">
          <div className="data-feature-copy">
            <Reveal>
              <p className="section-label">Gjetja kryesore</p>
              <h2>
                Potencial real.
                <br />
                Sfida reale.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="large-copy">
                Problemi kryesor nuk qëndron vetëm brenda bizneseve, por në
                kushtet ku ato operojnë.
              </p>
              <p>
                Parkimi, hapësira publike, mungesa e stafit dhe komunikimi i
                dobët institucional ndikojnë drejtpërdrejt në cilësinë e
                përvojës gastronomike.
              </p>
            </Reveal>
          </div>

          <Reveal className="data-feature-visual" delay={140}>
            <div className="donut" role="img" aria-label="77.5 për qind">
              <div>
                <strong>77.5%</strong>
                <span>raportojnë mungesë stafi</span>
              </div>
            </div>
            <div className="mini-stat">
              <strong>4.67 / 5</strong>
              <span>Parkingu - pengesa më e madhe</span>
            </div>
            <div className="mini-stat">
              <strong>72.5%</strong>
              <span>Pa udhëzime institucionale</span>
            </div>
          </Reveal>
        </section>

        <section className="section importance-section">
          <Reveal className="section-heading-row">
            <div>
              <p className="section-label">Rëndësia e hulumtimit</p>
              <h2>Pse gastronomia ka rëndësi?</h2>
            </div>
            <p>
              Gastronomia është pjesë organike e identitetit, ekonomisë dhe
              turizmit të Qendrës Historike të Prizrenit.
            </p>
          </Reveal>

          <div className="importance-list">
            {importance.map((item, index) => (
              <Reveal
                className="importance-item"
                delay={index * 50}
                key={item.number}
              >
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section priority-section">
          <Reveal className="priority-intro">
            <p className="section-label">Plan veprimi</p>
            <h2>Pesë prioritete strategjike</h2>
            <p>
              Për ta zhvilluar gastronominë, duhet të zhvillohet edhe mjedisi
              ku ajo funksionon.
            </p>
          </Reveal>

          <ol className="priority-list">
            {priorities.map((priority, index) => (
              <Reveal delay={index * 45} key={priority}>
                <li>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{priority}</strong>
                  <span aria-hidden="true">↗</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="section about-teaser">
          <Reveal className="about-teaser-kicker">
            <p className="section-label">Rreth NAM</p>
            <span className="about-year">2026</span>
          </Reveal>
          <Reveal className="about-teaser-copy" delay={100}>
            <h2>
              Një qendër ekspertize
              <br />
              për turizmin e së ardhmes.
            </h2>
            <p>
              NAM është institut i pavarur kërkimor dhe profesional. Ne lidhim
              të dhënat, kontekstin lokal dhe praktikat e mira ndërkombëtare
              për të mbështetur institucione, biznese dhe komunitete.
            </p>
            <Link className="button button-primary" href="/rreth-nesh">
              Më shumë për ne <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
