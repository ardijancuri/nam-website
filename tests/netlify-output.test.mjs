import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const handlerUrl = new URL(
    "../.netlify/functions-internal/server/server.mjs",
    import.meta.url,
  );
  handlerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: handler } = await import(handlerUrl.href);

  return handler(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
  );
}

test("Netlify server output renders every public route", async () => {
  const [home, research, about] = await Promise.all([
    render(),
    render("/hulumtimi"),
    render("/rreth-nesh"),
  ]);

  assert.equal(home.status, 200);
  assert.equal(research.status, 200);
  assert.equal(about.status, 200);

  assert.match(await home.text(), /Njohuri që i japin/);
  assert.match(await research.text(), /40 biznese/);
  assert.match(await about.text(), /institut i pavarur kërkimor/i);
});
