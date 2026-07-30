import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  CalendarDots,
  Car,
  ChatsCircle,
  Clock,
  GraduationCap,
  Grains,
  MagnifyingGlass,
  Path,
  ShieldCheck,
  TrendUp,
  UsersThree,
  Warning,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { StatMetric } from "../components/StatMetric";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = {
  title: "Hulumtimi i gastronomisë në Prizren",
  description:
    "Analizë e 40 bizneseve gastronomike në Qendrën Historike të Prizrenit.",
};

const businessTypes = [
  { label: "Kafe / Bar", value: 55 },
  { label: "Restorant", value: 22.5 },
  { label: "Ëmbëltore", value: 12.5 },
  { label: "Tjetër", value: 10 },
];

const localProducts = [
  { label: "0-20%", value: 10 },
  { label: "21-40%", value: 32.5 },
  { label: "41-60%", value: 25 },
  { label: "61-80%", value: 20 },
  { label: "81-100%", value: 12.5 },
];

const recommendations = [
  {
    icon: Car,
    title: "Përmirësimi i qasjes dhe parkingut",
    text: "Investime në infrastrukturë, rrugë këmbësorësh dhe hapësira parkimi pranë Qendrës Historike.",
  },
  {
    icon: ShieldCheck,
    title: "Menaxhimi i hapësirës publike dhe sigurisë",
    text: "Rregullim i qartë i hapësirave të jashtme, ndriçimit dhe sigurisë urbane.",
  },
  {
    icon: GraduationCap,
    title: "Trajnime për staf dhe ngritje profesionalizmi",
    text: "Program i vazhdueshëm për shërbim, gjuhë, higjienë dhe menaxhim sezonal.",
  },
  {
    icon: ChatsCircle,
    title: "Komunikim institucional me bizneset",
    text: "Kanale të qarta komunikimi ndërmjet komunës, institucioneve dhe bizneseve.",
  },
  {
    icon: Grains,
    title: "Promovimi i produkteve vendore dhe gastronomisë",
    text: "Integrim i gastronomisë lokale në festivalet dhe ngjarjet kulturore të Prizrenit.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <div className="light-page-shell">
        <SiteHeader />
        <main id="main">
          <section className="report-hero section">
            <div className="report-hero-main hero-enter hero-enter-1">
              <p className="section-label">Hulumtim gastronomik · Prizren 2026</p>
              <h1>
                Vlerësimi i gastronomisë
                <br />
                në Qendrën Historike të Prizrenit
              </h1>
              <p>
                Analizë statistikore e zgjeruar, e bazuar në të dhënat reale
                të 40 bizneseve gastronomike.
              </p>
            </div>
            <div className="report-hero-meta hero-enter hero-enter-2">
              <div>
                <span className="report-meta-label">
                  <Briefcase
                    aria-hidden="true"
                    size={22}
                    weight="duotone"
                  />
                  Mostra
                </span>
                <strong>40 biznese</strong>
              </div>
              <div>
                <span className="report-meta-label">
                  <MagnifyingGlass
                    aria-hidden="true"
                    size={22}
                    weight="duotone"
                  />
                  Mbulimi
                </span>
                <strong>Rreth 80%</strong>
              </div>
              <div>
                <span className="report-meta-label">
                  <CalendarDots
                    aria-hidden="true"
                    size={22}
                    weight="duotone"
                  />
                  Terreni
                </span>
                <strong>27.02 - 03.04.2026</strong>
              </div>
            </div>
            <span className="report-hero-number" aria-hidden="true">
              01
            </span>
          </section>

          <section className="section executive-section">
            <Reveal className="executive-heading">
              <p className="section-label">Përmbledhje ekzekutive</p>
              <h2>Një sektor stabil, i kufizuar nga mjedisi ku operon.</h2>
            </Reveal>
            <Reveal className="executive-copy" delay={80}>
              <p className="large-copy">
                Hulumtimi tregon se gastronomia në Qendrën Historike ka bazë
                funksionale, përvojë të gjatë dhe kërkesë reale. Megjithatë,
                potenciali i saj pengohet nga kushtet urbane, mungesa e stafit
                dhe dobësitë në komunikimin institucional.
              </p>
              <p>
                Parkingu dhe qasja dalin si pengesat më të mëdha. Krahas tyre,
                qarkullimi i automjeteve, siguria dhe menaxhimi i hapësirës
                publike ndikojnë drejtpërdrejt në përvojën e vizitorit dhe në
                punën e përditshme të bizneseve.
              </p>
              <p>
                Produkte vendore dhe evente kulturore krijojnë një mundësi të
                qartë zhvillimi, por kërkojnë planifikim, standarde dhe
                bashkëpunim ndërsektorial.
              </p>
            </Reveal>
          </section>

          <section
            className="section report-field-note"
            aria-labelledby="field-context-title"
          >
            <Reveal className="report-field-visual">
              <img
                src="/prizren-stone-bridge-evening.webp"
                alt="Restorantet pranë Urës së Gurit në Qendrën Historike të Prizrenit"
                width="1600"
                height="1066"
                loading="lazy"
              />
              <span aria-hidden="true">02</span>
            </Reveal>
            <Reveal className="report-field-copy" delay={90}>
              <p className="section-label">Konteksti i terrenit</p>
              <h2 id="field-context-title">
                Qyteti dhe gastronomia funksionojnë si një sistem.
              </h2>
              <p className="large-copy">
                Hapësira publike, qasja dhe ritmi sezonal ndikojnë po aq sa
                vetë oferta e bizneseve.
              </p>
              <div className="report-field-caption">
                <span>Prizren · 2026</span>
                <p>
                  Qendra Historike lidh ekonominë lokale, trashëgiminë dhe
                  përvojën e vizitorit në një territor të vetëm.
                </p>
              </div>
            </Reveal>
          </section>

          <section className="section chart-section">
            <Reveal className="chart-heading">
              <p className="section-label">Struktura e bizneseve</p>
              <h2>Llojet e bizneseve gastronomike</h2>
              <p>
                Qendra Historike dominohet nga kafe dhe baret, ndërsa format
                më të specializuara mbeten më pak të përfaqësuara.
              </p>
            </Reveal>
            <Reveal className="horizontal-chart" delay={90}>
              {businessTypes.map((item) => (
                <div className="chart-row" key={item.label}>
                  <div className="chart-row-label">
                    <span>{item.label}</span>
                    <strong>{item.value}%</strong>
                  </div>
                  <Progress
                    aria-label={`${item.label}: ${item.value}%`}
                    className="bar-track"
                    indicatorClassName="bar-track-fill"
                    value={item.value}
                  />
                </div>
              ))}
              <div className="chart-note">
                <Badge variant="insight">Gjetje kryesore</Badge>
                <p>
                  Vetëm 22.5% janë restorante - një tregues i potencialit të
                  pashfrytëzuar për diversifikim.
                </p>
              </div>
            </Reveal>
          </section>

          <section className="section standout-stats">
            <Reveal>
              <StatMetric
                context="Përvoja në treg"
                icon={Clock}
                label="operojnë prej më shumë se 10 vjetësh"
                progress={65}
                value="65%"
              />
            </Reveal>
            <Reveal delay={80}>
              <StatMetric
                context="Sezoni dhe të ardhurat"
                icon={TrendUp}
                label="raportojnë rritje mbi 31% gjatë sezonit veror"
                progress={87.5}
                value="87.5%"
              />
            </Reveal>
            <Reveal delay={160}>
              <StatMetric
                context="Madhësia"
                icon={UsersThree}
                label="kanë deri në 10 punonjës"
                progress={87.5}
                value="87.5%"
              />
            </Reveal>
          </section>

          <section className="section products-section">
            <Reveal className="products-copy">
              <p className="section-label">Produktet vendore</p>
              <h2>Të pranishme, por ende jo dominuese.</h2>
              <p className="large-copy">
                Vetëm 12.5% e bizneseve i përdorin produktet vendore në masën
                81-100%. Grupi më i madh mbetet në nivelin 21-40%.
              </p>
              <p>
                Furnizimi, cilësia dhe preferencat e klientëve kërkojnë
                bashkëpunim ndërmjet bizneseve, prodhuesve vendorë dhe
                institucioneve.
              </p>
            </Reveal>
            <Reveal className="vertical-chart" delay={100}>
              {localProducts.map((item) => (
                <div className="vertical-bar-item" key={item.label}>
                  <span className="vertical-value">{item.value}%</span>
                  <div className="vertical-track">
                    <span style={{ height: `${item.value * 2.5}%` }} />
                  </div>
                  <span className="vertical-label">{item.label}</span>
                </div>
              ))}
            </Reveal>
          </section>

          <section className="section challenge-section">
            <Reveal className="challenge-title">
              <p className="section-label">Sfidat strukturore</p>
              <h2>Tre sinjale që kërkojnë veprim të përbashkët.</h2>
            </Reveal>
            <div className="challenge-grid">
              <Reveal className="challenge-stat">
                <span className="challenge-icon">
                  <Car
                    aria-hidden="true"
                    size={36}
                    weight="duotone"
                  />
                </span>
                <strong>4.67/5</strong>
                <h3>Parkingu</h3>
                <p>
                  Pengesa më e madhe është një problem urban që kërkon zgjidhje
                  institucionale, jo vetëm biznesore.
                </p>
              </Reveal>
              <Reveal className="challenge-stat" delay={80}>
                <span className="challenge-icon">
                  <UsersThree
                    aria-hidden="true"
                    size={36}
                    weight="duotone"
                  />
                </span>
                <strong>77.5%</strong>
                <h3>Mungesa e stafit</h3>
                <p>
                  Ndikon drejtpërdrejt në shpejtësinë e shërbimit, cilësinë e
                  produktit dhe kënaqësinë e klientëve.
                </p>
              </Reveal>
              <Reveal className="challenge-stat" delay={160}>
                <span className="challenge-icon">
                  <Warning
                    aria-hidden="true"
                    size={36}
                    weight="duotone"
                  />
                </span>
                <strong>72.5%</strong>
                <h3>Pa udhëzime</h3>
                <p>
                  Bizneset nuk kanë marrë udhëzime për fasada, tabela, inventar
                  të jashtëm apo elemente vizuale.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="section public-space-section">
            <Reveal className="public-space-heading">
              <p className="section-label">Hapësira publike</p>
              <h2>Menaxhimi i zonës është pjesë e përvojës gastronomike.</h2>
            </Reveal>
            <div className="public-space-list">
              <Reveal>
                <span className="public-space-icon">
                  <Car
                    aria-hidden="true"
                    size={32}
                    weight="duotone"
                  />
                  <small>01</small>
                </span>
                <h3>Trafiku dhe parkimi</h3>
                <p>
                  Automjetet në hapësirat këmbësore pengojnë lëvizjen e lirë
                  dhe krijojnë rrezik sigurie.
                </p>
              </Reveal>
              <Reveal delay={70}>
                <span className="public-space-icon">
                  <ShieldCheck
                    aria-hidden="true"
                    size={32}
                    weight="duotone"
                  />
                  <small>02</small>
                </span>
                <h3>Siguria urbane</h3>
                <p>
                  Pasiguria e perceptuar dëmton imazhin dhe cilësinë e
                  destinacionit turistik.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <span className="public-space-icon">
                  <Path
                    aria-hidden="true"
                    size={32}
                    weight="duotone"
                  />
                  <small>03</small>
                </span>
                <h3>Organizimi i zonës</h3>
                <p>
                  Menaxhimi jo koherent i hapësirës historike ul cilësinë e
                  ambientit dhe përvojës vizuale.
                </p>
              </Reveal>
            </div>
          </section>

          <section className="section recommendations-section">
            <Reveal className="recommendations-heading">
              <p className="section-label">Plan veprimi</p>
              <h2>Rekomandime kryesore - 5 prioritete strategjike</h2>
            </Reveal>
            <ol className="recommendations-list">
              {recommendations.map((item, index) => (
                <Reveal delay={index * 45} key={item.title}>
                  <li>
                    <span className="recommendation-marker">
                      <item.icon
                        aria-hidden="true"
                        size={42}
                        weight="duotone"
                      />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="section report-conclusion">
            <Reveal>
              <p className="section-label">Përfundimi</p>
              <h2>
                Për ta zhvilluar gastronominë,
                <br />
                duhet të zhvillohet edhe mjedisi
                <br />
                ku ajo funksionon.
              </h2>
              <Link className="button button-primary" href="/rreth-nesh">
                Njihuni me institutin <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </section>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
