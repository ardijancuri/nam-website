import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CarFront,
  ChartNoAxesColumnIncreasing,
  GraduationCap,
  Landmark,
  MapPinned,
  MessageSquareText,
  ScanSearch,
  ShieldCheck,
  Sprout,
  UsersRound,
  Wheat,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const importance = [
  {
    number: "01",
    title: "Turizmi",
    text: "Gastronomia ndikon në vendimin e vizitorëve për të qëndruar më gjatë.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Ekonomia lokale",
    text: "Bizneset krijojnë vende pune dhe kontribuojnë në të ardhurat e komunës.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    number: "03",
    title: "Kultura",
    text: "Ushqimi tradicional lidh brezat dhe tërheq turistët kulturorë.",
    icon: Landmark,
  },
  {
    number: "04",
    title: "Hapësira publike",
    text: "Kafetë dhe restorantet aktivizojnë hapësirat historike të qytetit.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Vizitorët",
    text: "Përvoja gastronomike formëson kënaqësinë dhe imazhin e Prizrenit.",
    icon: UsersRound,
  },
];

const priorities = [
  { title: "Qasja dhe parkimi", icon: CarFront },
  { title: "Menaxhimi i hapësirës publike", icon: ShieldCheck },
  { title: "Trajnimi dhe profesionalizmi i stafit", icon: GraduationCap },
  { title: "Komunikimi institucional", icon: MessageSquareText },
  { title: "Produktet vendore dhe eventet", icon: Wheat },
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
              <div className="metric-header">
                <span className="metric-icon" aria-hidden="true">
                  <BriefcaseBusiness size={18} strokeWidth={1.7} />
                </span>
                <span className="metric-context">Mostra</span>
              </div>
              <span className="metric-value">40</span>
              <span className="metric-label">biznese në mostër</span>
              <span className="metric-rule" aria-hidden="true">
                <span style={{ width: "100%" }} />
              </span>
            </Reveal>
            <Reveal delay={100}>
              <div className="metric-header">
                <span className="metric-icon" aria-hidden="true">
                  <ScanSearch size={18} strokeWidth={1.7} />
                </span>
                <span className="metric-context">Mbulimi</span>
              </div>
              <span className="metric-value">~80%</span>
              <span className="metric-label">mbulim i sektorit në zonë</span>
              <span className="metric-rule" aria-hidden="true">
                <span style={{ width: "80%" }} />
              </span>
            </Reveal>
            <Reveal delay={160}>
              <div className="metric-header">
                <span className="metric-icon" aria-hidden="true">
                  <CalendarRange size={18} strokeWidth={1.7} />
                </span>
                <span className="metric-context">Terreni</span>
              </div>
              <span className="metric-value">36</span>
              <span className="metric-label">ditë punë në terren</span>
              <span className="metric-rule" aria-hidden="true">
                <span style={{ width: "64%" }} />
              </span>
            </Reveal>
          </div>
        </section>

        <section
          className="photo-chapter photo-chapter-home"
          aria-labelledby="gastronomy-identity-title"
        >
          <Reveal className="photo-chapter-frame">
            <figure>
              <div className="photo-chapter-media">
                <img
                  src="/prizren-heritage-gastronomy.webp"
                  alt="Restorant me tarracë pranë arkitekturës historike të Prizrenit"
                  width="1600"
                  height="1066"
                  loading="lazy"
                />
              </div>
              <figcaption className="photo-chapter-caption">
                <span className="photo-chapter-index">02 / Prizren</span>
                <div>
                  <p className="section-label">Identiteti gastronomik</p>
                  <h2 id="gastronomy-identity-title">
                    Trashëgimia dhe mikpritja
                    <br />
                    ndajnë të njëjtën hapësirë.
                  </h2>
                </div>
                <p>
                  Oferta gastronomike e Qendrës Historike është pjesë e
                  përvojës kulturore dhe urbane të qytetit.
                </p>
              </figcaption>
            </figure>
          </Reveal>
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
                <UsersRound
                  className="donut-icon"
                  size={24}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <strong>77.5%</strong>
                <span>raportojnë mungesë stafi</span>
              </div>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-top">
                <CarFront size={19} strokeWidth={1.7} aria-hidden="true" />
                <strong>4.67 / 5</strong>
              </div>
              <span>Parkingu - pengesa më e madhe</span>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-top">
                <MessageSquareText
                  size={19}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <strong>72.5%</strong>
              </div>
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
                <div className="importance-item-top">
                  <span>{item.number}</span>
                  <item.icon size={22} strokeWidth={1.6} aria-hidden="true" />
                </div>
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
              <Reveal delay={index * 45} key={priority.title}>
                <li>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="priority-icon" aria-hidden="true">
                    <priority.icon size={20} strokeWidth={1.6} />
                  </span>
                  <strong>{priority.title}</strong>
                  <span aria-hidden="true">↗</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        <section className="section about-teaser">
          <Reveal className="about-teaser-kicker">
            <p className="section-label">Rreth NAM</p>
            <span className="about-year">
              <Sprout size={17} strokeWidth={1.6} aria-hidden="true" />
              2026
            </span>
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
