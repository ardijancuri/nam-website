import Link from "next/link";
import {
  Bank,
  Briefcase,
  Buildings,
  CalendarDots,
  Car,
  ChartLineUp,
  ChatsCircle,
  GraduationCap,
  Grains,
  MapPin,
  MagnifyingGlass,
  Plant,
  ShieldCheck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { StatMetric } from "./components/StatMetric";

const importance = [
  {
    number: "01",
    title: "Turizmi",
    text: "Gastronomia ndikon në vendimin e vizitorëve për të qëndruar më gjatë.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Ekonomia lokale",
    text: "Bizneset krijojnë vende pune dhe kontribuojnë në të ardhurat e komunës.",
    icon: ChartLineUp,
  },
  {
    number: "03",
    title: "Kultura",
    text: "Ushqimi tradicional lidh brezat dhe tërheq turistët kulturorë.",
    icon: Bank,
  },
  {
    number: "04",
    title: "Hapësira publike",
    text: "Kafetë dhe restorantet aktivizojnë hapësirat historike të qytetit.",
    icon: Buildings,
  },
  {
    number: "05",
    title: "Vizitorët",
    text: "Përvoja gastronomike formëson kënaqësinë dhe imazhin e Prizrenit.",
    icon: UsersThree,
  },
];

const priorities = [
  { title: "Qasja dhe parkimi", icon: Car },
  { title: "Menaxhimi i hapësirës publike", icon: ShieldCheck },
  { title: "Trajnimi dhe profesionalizmi i stafit", icon: GraduationCap },
  { title: "Komunikimi institucional", icon: ChatsCircle },
  { title: "Produktet vendore dhe eventet", icon: Grains },
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
              <StatMetric
                context="Mostra"
                icon={Briefcase}
                label="biznese në mostër"
                progress={100}
                value="40"
              />
            </Reveal>
            <Reveal delay={100}>
              <StatMetric
                context="Mbulimi"
                icon={MagnifyingGlass}
                label="mbulim i sektorit në zonë"
                progress={80}
                value="~80%"
              />
            </Reveal>
            <Reveal delay={160}>
              <StatMetric
                context="Terreni"
                icon={CalendarDots}
                label="ditë punë në terren"
                progress={64}
                value="36"
              />
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
                <UsersThree
                  className="donut-icon"
                  size={32}
                  weight="duotone"
                  aria-hidden="true"
                />
                <strong>77.5%</strong>
                <span>raportojnë mungesë stafi</span>
              </div>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-top">
                <Car
                  size={28}
                  weight="duotone"
                  aria-hidden="true"
                />
                <strong>4.67 / 5</strong>
              </div>
              <span>Parkingu - pengesa më e madhe</span>
            </div>
            <div className="mini-stat">
              <div className="mini-stat-top">
                <ChatsCircle
                  size={28}
                  weight="duotone"
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
                  <item.icon
                    size={30}
                    weight="duotone"
                    aria-hidden="true"
                  />
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
                    <priority.icon
                      size={30}
                      weight="duotone"
                    />
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
              <Plant
                size={21}
                weight="duotone"
                aria-hidden="true"
              />
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
