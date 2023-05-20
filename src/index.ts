import playwright, { chromium } from 'playwright';
import { BrowserContextOptions, firefox } from 'playwright-core';
// import { getLocatorText } from '../helpers/playwright-helpers.js';

async function runBrowser() {
  const browser1 = await firefox.launch({
    headless: false,
    devtools: true,
  });
  const ctx = await browser1.newContext();
  const page1 = await ctx.newPage();
  // await page1.goto('https://lumtest.com/myip.json', { waitUntil: 'domcontentloaded' });
  await page1.goto('https://mail.ru/', { waitUntil: 'domcontentloaded' });

  // const myIpData = await getLocatorText(page1, 'pre');
}

await runBrowser();
