const supportedLocalesWithCurrency = [
  {
    lang: 'de',
    geo: 'at',
    name: 'Austria',
    stageExpect: '4,99 €/Monat'
  }, // currently returns USD instead of EURO
  { lang: 'nl', geo: 'be', name: 'Belgium', stageExpect: '4,99 €/maand' },
  {
    lang: 'en-US',
    geo: 'ca',
    name: 'Canada',
    stageExpect: 'US$4.99/month'
  },
  {
    lang: 'de',
    geo: 'ch',
    name: 'Switzerland',
    stageExpect: 'CHF 5.99/Monat'
  },
  { lang: 'de', geo: 'de', name: 'Germany', stageExpect: '4,99 €/Monat' },
  { lang: 'es-US', geo: 'es', name: 'Spain', stageExpect: '4,99 €/month' },
  { lang: 'fr', geo: 'fr', name: 'France', stageExpect: '4,99 €/mois' },
  { lang: 'en-US', geo: 'gb', name: 'UK', stageExpect: 'US$4.99/month' }, // shouldn't this be in pounds?
  {
    lang: 'it',
    geo: 'it',
    name: 'Italy',
    stageExpect: '4,99 € al mese'
  },
  {
    lang: 'en-US',
    geo: 'my',
    name: 'Malaysia',
    stageExpect: 'US$4.99/month'
  },
  {
    lang: 'en-US',
    geo: 'nz',
    name: 'New Zealand',
    stageExpect: 'US$4.99/month'
  },
  {
    lang: 'en-US',
    geo: 'sg',
    name: 'Singapore',
    stageExpect: 'US$4.99/month'
  },
  {
    lang: 'en-US',
    geo: 'US',
    name: 'United States',
    stageExpect: 'US$4.99/month'
  }
];

const supportedLocales = [
  {
    lang: 'de',
    geo: 'at',
    name: 'Austria',
    expectedTermsTitle: 'Mozilla VPN Servicebedingungen',
    expectedPrivacyTitle: 'Mozilla VPN Datenschutzhinweis'
  }, // currently returns USD instead of EURO
  {
    lang: 'nl',
    geo: 'be',
    name: 'Belgium',
    expectedTermsTitle: 'Voorwaarden van de Mozilla VPN Terms',
    expectedPrivacyTitle: 'Mozilla VPN Privacyverklaring'
  },
  {
    lang: 'en-US',
    geo: 'ca',
    name: 'Canada',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  },
  {
    lang: 'de',
    geo: 'ch',
    name: 'Switzerland',
    expectedTermsTitle: 'Mozilla VPN Servicebedingungen',
    expectedPrivacyTitle: 'Mozilla VPN Datenschutzhinweis'
  },
  {
    lang: 'de',
    geo: 'de',
    name: 'Germany',
    expectedTermsTitle: 'Mozilla VPN Servicebedingungen',
    expectedPrivacyTitle: 'Mozilla VPN Datenschutzhinweis'
  },
  {
    lang: 'es-US',
    geo: 'es',
    name: 'Spain',
    expectedTermsTitle: 'Condiciones del servicio de Mozilla VPN',
    expectedPrivacyTitle: 'Mozilla VPN Aviso de privacidad'
  },
  {
    lang: 'fr',
    geo: 'fr',
    name: 'France',
    expectedTermsTitle: 'Mozilla VPN - Conditions d’utilisation',
    expectedPrivacyTitle: 'Mozilla VPN  - Politique de confidentialité'
  },
  {
    lang: 'en-US',
    geo: 'gb',
    name: 'UK',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  }, // shouldn't this be in pounds?
  {
    lang: 'it',
    geo: 'it',
    name: 'Italy',
    expectedTermsTitle: 'Termini di servizio di Mozilla VPN',
    expectedPrivacyTitle: 'Informativa sulla privacy di Mozilla VPN'
  },
  {
    lang: 'en-US',
    geo: 'my',
    name: 'Malaysia',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  },
  {
    lang: 'en-US',
    geo: 'nz',
    name: 'New Zealand',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  },
  {
    lang: 'en-US',
    geo: 'sg',
    name: 'Singapore',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  },
  {
    lang: 'en-US',
    geo: 'US',
    name: 'United States',
    expectedTermsTitle: 'Mozilla VPN Terms of Service',
    expectedPrivacyTitle: 'Mozilla VPN Privacy Notice'
  }
];

module.exports = {
  supportedLocales,
  supportedLocalesWithCurrency
};
