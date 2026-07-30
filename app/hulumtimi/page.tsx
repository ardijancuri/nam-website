import type { Metadata } from "next";
import {
  ArrowsOutSimple,
  DownloadSimple,
  FilePdf,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Vlerësimi i gastronomisë në Qendrën Historike të Prizrenit",
  description:
    "Raporti i plotë me analizën statistikore të 40 bizneseve gastronomike në Qendrën Historike të Prizrenit.",
};

const reportPages = [
  "Vlerësimi i gastronomisë në Qendrën Historike të Prizrenit",
  "Përmbledhje ekzekutive",
  "Përmbledhje ekzekutive - vazhdim",
  "Pse është i rëndësishëm ky hulumtim?",
  "Mesazhi kryesor",
  "Si u realizua ky hulumtim?",
  "Llojet e bizneseve gastronomike",
  "Sa vite operojnë bizneset?",
  "Biznese të vogla dhe të mesme",
  "Fluksi mujor i klientëve - sezoni vjetor",
  "Vera - Motori ekonomik i gastronomisë",
  "A kanë vështirësi bizneset gjatë sezonit?",
  "Përdorimi i produkteve vendore në ofertë",
  "Pse nuk përdoren më shumë produktet vendore?",
  "Si vlerësohet gastronomia sot?",
  "Mungesa e stafit - Sfida nr. 1 sezonale",
  "Niveli i profesionalizmit dhe nevojat për trajnim",
  "Pengesat kryesore - renditja sipas rëndësisë",
  "Menaxhimi i hapësirës publike - Sfidë kyçe",
  "Bizneset dhe institucionet - Një hendek i madh",
  "Potenciali i festivaleve - Akoma i pashfrytëzuar",
  "Tre mundësi zhvillimi me impakt të lartë",
  "Pesë kufizimet kryesore strukturore",
  "Rekomandime kryesore - 5 prioritete strategjike",
  "Gastronomia e Prizrenit - Potencial real, sfida reale",
] as const;

const pdfPath =
  "/research-report/vleresimi-gastronomise-prizren.pdf";

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
                <h1>Vlerësimi i gastronomisë</h1>
              </div>
            </div>

            <div className="report-reader-actions">
              <span>40 biznese · 25 faqe</span>
              <a className="report-download" href={pdfPath} download>
                <DownloadSimple size={20} weight="bold" aria-hidden="true" />
                Shkarko PDF
              </a>
            </div>
          </header>

          <div className="report-pages" aria-label="Raporti i plotë">
            {reportPages.map((title, index) => {
              const page = String(index + 1).padStart(2, "0");
              const imagePath = `/research-report/page-${page}.png`;

              return (
                <Reveal className="report-page-reveal" key={title}>
                  <figure className="report-page" id={`faqe-${page}`}>
                    <a
                      className="report-page-image-link"
                      href={imagePath}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Hap faqen ${index + 1}: ${title}`}
                    >
                      <img
                        src={imagePath}
                        alt={`Faqja ${index + 1} e raportit: ${title}`}
                        width="1684"
                        height="1191"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "auto"}
                      />
                      <span className="report-page-expand" aria-hidden="true">
                        <ArrowsOutSimple size={18} weight="bold" />
                        Zmadho
                      </span>
                    </a>
                    <figcaption>
                      <span>{title}</span>
                      <strong>
                        {page} / {reportPages.length}
                      </strong>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>

          <section className="report-reader-end">
            <p>Raporti origjinal · NAM · Prizren 2026</p>
            <a className="button button-primary" href={pdfPath} download>
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
