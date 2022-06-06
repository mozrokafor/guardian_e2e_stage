const { test, expect } = require('@playwright/test');
const { supportedLocalesWithCurrency } = require('../fixtures/locales');
const { allure } = require('allure-playwright');
const { getRequest } = require('../utils/helpers');

let GuardianSpecs;
const baseURL = process.env.TEST_EXPECT_URL;
test.describe.configure({ mode: 'parallel' });

// C1538754 - Verify that 3 subscriptions plans are displayed correctly in VPN homepage for each of the new regions
// C1601703 -  Verify that pricing and currency are displayed correctly in VPN homepage for each of the new regions
test.describe(
  `${process.env.TEST_ENV} - guardian localization by urls, C1538754, C1601703`,
  () => {
    test.beforeAll(async () => {
      const _res = await getRequest(`${process.env.TEST_BASE_URL}/__version__`);
      GuardianSpecs = _res;
    });

    for (const locale of supportedLocalesWithCurrency) {
      test.describe(
        `${locale.name} - ${baseURL}/${locale.lang}/products/vpn/?geo=${locale.geo}`,
        () => {
          test.beforeEach(async ({ page }) => {
            allure.suite(
              `${process.env.TEST_ENV} - Version: ${GuardianSpecs.version}, Commit: ${GuardianSpecs.commit}`
            );
            await page.goto(
              `${baseURL}/${locale.lang}/products/vpn/?geo=${locale.geo}`,
              {
                waitUntil: 'networkidle'
              }
            );
          });

          test(`Verify locale handling in ${locale.name}`, async ({ page }) => {
            const pricingTables = await page
              .locator('#pricing .vpn-content-block')
              .count();
            expect(pricingTables).toEqual(3);

            const monthPlanPrice = await page
              .locator('#pricing .vpn-monthly-price-display')
              .first()
              .textContent();

            const expectedMonthlyPrice = locale.stageExpect;
            expect(
              monthPlanPrice,
              `${monthPlanPrice} for ${locale.name} did not match expected ${locale.expect}`
            ).toEqual(expectedMonthlyPrice);
          });
        }
      );
    }
  }
);
