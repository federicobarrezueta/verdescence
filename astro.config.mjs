import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://growboticslabs.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});