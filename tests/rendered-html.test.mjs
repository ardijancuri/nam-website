import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the NAM homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Instituti për Turizëm dhe Kulturë/);
  assert.match(html, /Njohuri që i japin/);
  assert.match(html, /Përmbledhja e hulumtimit/);
  assert.match(html, /Vlerësimi i gastronomisë/);
  assert.match(html, /permbledhja-e-hulumtimit\.pdf/);
  assert.match(html, /vleresimi-i-gastronomise\.pdf/);
  const researchPageImages = new Set(
    html.match(/research-report\/page-\d{2}\.png/g) ?? [],
  );
  assert.equal(researchPageImages.size, 25);
  assert.match(html, /info@namins\.org/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("removes the standalone research route and renders the about route", async () => {
  const [removedResearch, about] = await Promise.all([
    render("/hulumtimi"),
    render("/rreth-nesh"),
  ]);

  assert.equal(removedResearch.status, 404);
  assert.equal(about.status, 200);

  const aboutHtml = await about.text();

  assert.match(aboutHtml, /institut i pavarur kërkimor dhe profesional/i);
  assert.match(aboutHtml, /about-prizren-domes\.webp/);
  assert.match(aboutHtml, /about-field-research\.webp/);
  assert.match(aboutHtml, /01 \/ 05/);
});

test("starter preview and dependency are removed", async () => {
  const [page, layout, siteHeader, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/SiteHeader.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(siteHeader, /Përmbledhja e hulumtimit/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
