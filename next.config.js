const path = require('path');
/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  reactStrictMode: true
});

module.exports = withNextra();
