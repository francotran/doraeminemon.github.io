module.exports = {
  title: "Tran Anh Phuong",
  description: "Marketing & Communication Specialist",
  head:[
    ['link', { href:'https://fonts.googleapis.com/css?family=Roboto+Slab:700', rel:'stylesheet'}]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Portfolio', link: '/Portfolio' },
      { text: 'Get a quote', link: '/Quote' },
      { text: 'Blog', link: '/category/' },
      { text: 'Repo', link: 'https://github.com/doraeminemon/doraeminemon.github.io' },
    ],
    lastUpdated: 'Last Updated',
  },
  plugins: [
    [
      'container',
      {
        type: 'contacts',
        before: info => `<Contacts>`,
        after: `</Contacts>`
      }
    ],
    [
      '@vuepress/blog',
      {
        postsDir: 'blog-posts',
        categoryIndexPageUrl: "/category/",
        tagIndexpageUrl: "/tag/",
        permalink: "/:year/:month/:day/:slug"
      }
    ]
  ],
  evergreen: true,
}