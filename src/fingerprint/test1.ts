import playwright from 'playwright';
import { FingerprintInjector, newInjectedContext } from 'fingerprint-injector';
import { HeaderGeneratorOptions } from 'header-generator';
import { FingerprintGenerator, PRESETS } from 'fingerprint-generator';
import fse from 'fs-extra/esm';
import fs from 'node:fs/promises';
import path from 'path';

async function browseUrl() {
  const browser = await playwright.chromium.launch({ headless: false });
  const ctx = await browser.newContext();

  /*  const context = await newInjectedContext(browser, {
    // Constraints for the generated fingerprint (optional)
    fingerprintOptions: {
      devices: ['mobile'],
      operatingSystems: ['ios'],
    },
    // Playwright's newContext() options (optional, random example for illustration)
    newContextOptions: {
      geolocation: {
        latitude: 51.50853,
        longitude: -0.12574,
      },
    },
  });*/

  const fingerprintGenerator = new FingerprintGenerator();
  const fingerprintInjector = new FingerprintInjector();

  const locales = ['ru-RU', 'en-EN'];
  const fingerprintWithHeaders = fingerprintGenerator.getFingerprint({
    devices: ['desktop'],
    operatingSystems: ['linux', 'windows'],
    screen: {
      minHeight: 1080,
      minWidth: 1920,
    },
    browsers: ['chrome', 'firefox', 'safari', 'edge'],
    locales,
  });

  await fingerprintInjector.attachFingerprintToPlaywright(ctx, fingerprintWithHeaders);

  const page1 = await ctx.newPage();
  await page1.goto('https://fingerprintjs.github.io/BotD/main/');
  // const html = await page1.context();
  const html = await page1.innerHTML('body');

  const htmlDir = path.resolve(process.cwd(), 'data-html', 'index.html');
  // console.log(process.cwd());
  console.log('htmlDir ', htmlDir);

  await fse.outputFile(htmlDir, html, { encoding: 'utf-8' });

  const html2 = await page1.locator('#result-text').innerHTML();
  console.log(html2);

  /* const page2 = await ctx.newPage();
  const pr2 = page2.goto('https://abrahamjuliot.github.io/creepjs/');

  const page3 = await ctx.newPage();
  const pr3 = page3.goto('https://fingerprint.com/');
  await Promise.all([pr1, pr2, pr3]);*/
  await browser.close();
}

await browseUrl();
