export default defineAppConfig({
  title: 'gurmax.com',
  email: 'gurmax.com',
  github: 'gurmax.com',
  twitter: 'gurmax.com',
  telegram: 'gurmax.com',
  mastodon: 'gurmax.com',
  blog: 'gurmax.com',
  description: 'grumax.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
