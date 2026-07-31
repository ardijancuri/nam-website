import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Rreth nesh",
  description:
    "Instituti për Turizëm dhe Kulturë NAM - institut i pavarur kërkimor dhe profesional.",
};

const fields = [
  "Politikat turistike",
  "Konkurrueshmëria e destinacioneve",
  "Cilësia e shërbimeve",
  "Përvoja e vizitorëve",
  "Gastronomia",
  "Produktet turistike",
  "Interpretimi i atraksioneve",
];

export default function AboutPage() {
  return (
    <>
      <div className="light-page-shell">
        <SiteHeader />
        <main id="main">
          <section className="about-hero section">
            <div className="about-hero-index hero-enter hero-enter-1">
              <span>Rreth nesh</span>
              <span>01 — 04</span>
            </div>
            <div className="about-hero-copy hero-enter hero-enter-2">
              <p className="section-label">
                Instituti për Turizëm dhe Kulturë NAM
              </p>
              <h1>
                Njohuri, të dhëna dhe ekspertizë për zhvillimin e turizmit në
                Kosovë.
              </h1>
            </div>
            <p className="about-hero-intro hero-enter hero-enter-3">
              NAM është institut i pavarur kërkimor dhe profesional, i
              themeluar në vitin 2026, me qëllim të avancimit të turizmit
              përmes hulumtimit, analizës, të dhënave dhe bashkëpunimit
              ndërsektorial.
            </p>
          </section>

          <section className="section about-story">
            <Reveal className="about-story-label">
              <span>01</span>
              <p className="section-label">Kush jemi</p>
            </Reveal>
            <Reveal className="about-story-copy" delay={80}>
              <h2>Turizmin e trajtojmë si fushë ekonomike, kulturore dhe shoqërore.</h2>
              <p>
                Puna jonë synon të ofrojë analiza të bazuara në të dhëna,
                vlerësime profesionale dhe rekomandime të zbatueshme që
                mbështesin institucionet publike, sektorin privat, komunitetet
                dhe partnerët zhvillimorë në planifikimin dhe zhvillimin më
                cilësor të destinacioneve turistike.
              </p>
            </Reveal>
          </section>

          <section
            className="about-place-chapter"
            aria-labelledby="place-chapter-title"
          >
            <Reveal className="about-place-media">
              <img
                src="/prizren-cultural-heritage.webp"
                alt="Kulla e një kishe historike në Prizren në dritën e mbrëmjes"
                width="1600"
                height="1066"
                loading="lazy"
              />
            </Reveal>
            <Reveal className="about-place-copy" delay={90}>
              <div className="about-place-number" aria-hidden="true">
                02
              </div>
              <div>
                <p className="section-label">Vendi dhe identiteti</p>
                <h2 id="place-chapter-title">
                  Turizmi fillon nga kuptimi i vendit.
                </h2>
                <p>
                  Trashëgimia kulturore nuk është sfond. Ajo është pjesë e
                  përvojës, kujtesës dhe vlerës që një destinacion u ofron
                  vizitorëve dhe komunitetit.
                </p>
              </div>
            </Reveal>
          </section>

          <section className="section about-work">
            <Reveal className="about-work-heading">
              <span>02</span>
              <div>
                <p className="section-label">Çfarë bëjmë</p>
                <h2>Nga terreni te vendimmarrja.</h2>
              </div>
            </Reveal>
            <Reveal className="about-work-copy" delay={80}>
              <p className="large-copy">
                Zhvillojmë hulumtime në terren, analiza sektoriale, vlerësime
                të destinacioneve, raporte profesionale, publikime tematike,
                këshillim dhe aktivitete për ndërtimin e kapaciteteve.
              </p>
            </Reveal>
            <div className="field-list">
              {fields.map((field, index) => (
                <Reveal delay={index * 35} key={field}>
                  <div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{field}</strong>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="section approach-section">
            <Reveal className="approach-index">
              <span>03</span>
              <p className="section-label">Qasja jonë</p>
            </Reveal>
            <div className="approach-content">
              <Reveal>
                <h2>Destinacioni, komuniteti dhe përvoja e vizitorit.</h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="large-copy">
                  Në qendër të qasjes sonë është lidhja ndërmjet
                  destinacionit, komunitetit dhe përvojës së vizitorit.
                </p>
                <p>
                  Kultura, identiteti lokal dhe trashëgimia kulturore trajtohen
                  si pjesë e rëndësishme e ofertës turistike, sepse u japin
                  destinacioneve karakter më të qartë, përmbajtje më të pasur
                  dhe mundësi më të mëdha për zhvillim të qëndrueshëm.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Qasja e NAM mbështetet në të dhëna, analiza të kujdesshme,
                  njohje të kontekstit lokal dhe praktika të mira
                  ndërkombëtare të përshtatura me realitetin e Kosovës.
                </p>
                <p>
                  Zhvillimi i turizmit kërkon planifikim afatgjatë, menaxhim më
                  të mirë të destinacioneve, përmirësim të vazhdueshëm të
                  shërbimeve, bashkëpunim ndërmjet aktorëve dhe përfitime të
                  qarta për komunitetet ku zhvillohet turizmi.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="section vision-section">
            <Reveal className="vision-meta">
              <span>04</span>
              <p className="section-label">Vizioni ynë</p>
            </Reveal>
            <Reveal className="vision-copy" delay={90}>
              <h2>
                Të bëhemi qendër referuese e ekspertizës për turizmin në Kosovë
                dhe në rajon.
              </h2>
              <p>
                Synojmë të vendosim standarde më të larta në hulumtim, analizë,
                planifikim dhe zhvillim të destinacioneve.
              </p>
              <Link className="button button-light" href="/hulumtimi">
                Shiko hulumtimin tonë
                <ArrowRight
                  className="direction-icon"
                  size={19}
                  weight="bold"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
