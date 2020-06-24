/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    basePath: "/",
    title: "Yummy",
    description: "Yummy, tasty and easy vegan recipes.",
    url: "https://yummy.cyrilf.com", // No trailing slash allowed!
    image: "/images/og-image.jpg", // Path to your image you placed in the 'static' folder
    author: "cyrilf",
    intro: "Let's bake & cook some deliciousness",
    menuLinks: [
      {
        name: "About",
        slug: "/about/"
      }
    ],
    footerLinks: [
      {
        name: "Github",
        href: "https://github.com/cyrilf/yummy"
      }
    ]
  },
  plugins: [
    {
      resolve: "@marinda/gatsby-theme-recipes",
      options: {
        // title: "Classic Recipes",
        // shortTitle: "Recipes"
        iconPath: "src/images/favicon.png",
        contentPath: "recipes"
      }
    }
  ]
};
