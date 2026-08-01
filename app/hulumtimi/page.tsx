import type { Metadata } from "next";
import {
  DownloadSimple,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  getResearchPageImage,
  researchPages,
  researchSummaryPdfPath,
} from "../data/research";

export const metadata: Metadata = {
  title: "Përmbledhja e hulumtimit gastronomik",
  description:
    "Përmbledhja vizuale e analizës statistikore të 40 bizneseve gastronomike në Qendrën Historike të Prizrenit.",
};

export default function ResearchPage() {
  return (
    <>
      <div className="report-reader-shell">
        <SiteHeader />
        <main id="main" className="report-reader">
          <header className="report-reader-toolbar">
            <div className="report-reader-heading">
              <span className="report-reader-file-icon" aria-hidden="true">
                <FilePdf size={28} weight="duotone" />
              </span>
              <div>
                <p>Hulumtim gastronomik · Prizren 2026</p>
                <h1>Përmbledhja e hulumtimit</h1>
              </div>
            </div>

            <div className="report-reader-actions">
              <span>40 biznese · 25 faqe</span>
              <a className="report-download" href={researchSummaryPdfPath} download>
                <DownloadSimple size={20} weight="bold" aria-hidden="true" />
                Shkarko PDF
              </a>
            </div>
          </header>

          <div className="report-pages" aria-label="Raporti i plotë">
            {researchPages.map((title, index) => {
              const page = String(index + 1).padStart(2, "0");
              const imagePath = getResearchPageImage(index);

              return (
                <Reveal className="report-page-reveal" key={title}>
                  <figure className="report-page" id={`faqe-${page}`}>
                    <div className="report-page-image">
                      <img
                        src={imagePath}
                        alt={`Faqja ${index + 1} e raportit: ${title}`}
                        width="1684"
                        height="1191"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                      />
                    </div>
                    <figcaption>
                      <span>{title}</span>
                      <strong>
                        {page} / {researchPages.length}
                      </strong>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>

          <section className="report-reader-end">
            <p>Raporti origjinal · NAM · Prizren 2026</p>
            <a className="button button-primary" href={researchSummaryPdfPath} download>
              <DownloadSimple size={20} weight="bold" aria-hidden="true" />
              Shkarko raportin e plotë
            </a>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
