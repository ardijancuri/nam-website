import { Fragment } from "react";
import {
  ArrowUpRight,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./components/Reveal";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  fullResearchPdfPath,
  getResearchPageImage,
  researchPages,
  researchSummaryPdfPath,
} from "./data/research";

const researchInterludes = {
  6: {
    src: "/about-field-research.webp",
    alt: "Ekip hulumtues duke mbledhur të dhëna në terren",
    label: "Hulumtimi në terren",
    caption:
      "Të dhënat fillojnë me bisedën, vëzhgimin dhe kuptimin e përvojës lokale.",
  },
  12: {
    src: "/prizren-stone-bridge-evening.webp",
    alt: "Ura e Gurit dhe gastronomia e Prizrenit në mbrëmje",
    label: "Sezonaliteti dhe qyteti",
    caption:
      "Mbrëmjet e Prizrenit tregojnë sa ngushtë lidhen gastronomia, hapësira publike dhe turizmi.",
  },
  14: {
    src: "/prizren-heritage-gastronomy.webp",
    alt: "Restorant pranë arkitekturës historike të Prizrenit",
    label: "Oferta vendore",
    caption:
      "Produktet, mikpritja dhe trashëgimia krijojnë një përvojë që i përket vetëm këtij vendi.",
  },
  19: {
    src: "/about-prizren-domes.webp",
    alt: "Kupolat dhe minarja në Qendrën Historike të Prizrenit",
    label: "Qendra Historike",
    caption:
      "Zhvillimi gastronomik duhet të ecë bashkë me ruajtjen e karakterit kulturor të qytetit.",
  },
} as const;

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
          <div className="hero-actions home-hero-document-actions hero-enter hero-enter-4">
            <a
              className="button button-light hero-document-button"
              href={researchSummaryPdfPath}
              target="_blank"
              rel="noreferrer"
            >
              <FilePdf size={24} weight="duotone" aria-hidden="true" />
              <span>Përmbledhja e hulumtimit</span>
              <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
            </a>
            <a
              className="button button-ghost-light hero-document-button"
              href={fullResearchPdfPath}
              target="_blank"
              rel="noreferrer"
            >
              <FilePdf size={24} weight="duotone" aria-hidden="true" />
              <span>Vlerësimi i gastronomisë</span>
              <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="hero-index-line" />
          <span>2026</span>
        </div>
      </section>

      <main id="main">
        <section
          className="home-research-story"
          id="permbledhja"
          aria-label="Përmbledhja e hulumtimit gastronomik"
        >
          {researchPages.map((title, index) => {
            const pageNumber = index + 1;
            const interlude =
              researchInterludes[
                pageNumber as keyof typeof researchInterludes
              ];

            return (
              <Fragment key={title}>
                <Reveal className="home-report-section">
                  <img
                    src={getResearchPageImage(index)}
                    alt={`Përmbledhja e hulumtimit: ${title}`}
                    width="1684"
                    height="1191"
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                  />
                </Reveal>

                {interlude ? (
                  <Reveal className="research-photo-interlude">
                    <figure>
                      <img
                        src={interlude.src}
                        alt={interlude.alt}
                        width="1600"
                        height="1066"
                        loading="lazy"
                      />
                      <figcaption>
                        <span>{interlude.label}</span>
                        <p>{interlude.caption}</p>
                      </figcaption>
                    </figure>
                  </Reveal>
                ) : null}
              </Fragment>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
