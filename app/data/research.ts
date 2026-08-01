export const researchSummaryPdfPath =
  "/documents/permbledhja-e-hulumtimit.pdf";

export const fullResearchPdfPath =
  "/documents/vleresimi-i-gastronomise.pdf";

export const researchPages = [
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

export function getResearchPageImage(index: number) {
  const page = String(index + 1).padStart(2, "0");
  return `/research-report/page-${page}.png`;
}
