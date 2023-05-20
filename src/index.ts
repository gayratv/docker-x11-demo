import playwright from 'playwright';

async function runBrowser() {
  const browser1 = await playwright.chromium.launch({
    headless: false,
  });
  const ctx = await browser1.newContext();
  const page1 = await ctx.newPage();
  await page1.goto('https://mail.ru/', { waitUntil: 'domcontentloaded' });
}

await runBrowser();
