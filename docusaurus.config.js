const path = require('path');

const leaf_logo = 'img/logo4light_mode.png'
const leaf_favicon_light = 'img/icon4dark_mode.png'

const leaf_logo_dark = 'img/logo4dark_mode.png'
const leaf_favicon_dark = 'img/icon4light_mode.png'


module.exports = {
  title: 'Leaf',
  tagline: 'The easiest way to connect agriculture data across platforms',

  organizationName: 'leaf-agriculture',
  projectName: 'docs',

  baseUrl: '/docs/',
  url: 'https://leaf-agriculture.github.io',
  favicon: leaf_favicon_light,

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig: {
    // prism: {
    //   theme: require('prism-react-renderer/themes/leaf'),
    // },
    navbar: {
      logo: {
        alt: 'logo',
        src: leaf_logo,
        srcDark: leaf_logo_dark,
        href: 'https://withleaf.io'
      },

      items: [
        // begin workaround to center navigation items
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        { to: 'docs/', activeBasePath: './', label: '             ', position: 'left'},
        // end workaround to center navigation items
        {
          to: 'https://leafagriculture.com.br/registration/',
          activeBasePath: './',
          label: 'Products',
          position: 'left',
        },
        {
          to: 'https://withleaf.io',
          activeBasePath: './',
          label: 'Website',
          position: 'left',
        },
        {
          to: 'https://leafagriculture.com.br/pricing/',
          activeBasePath: './',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'https://leafagriculture.com.br/careers/',
          activeBasePath: './',
          label: 'Work with us',
          position: 'left',
        },
        {
          to: 'https://leafagriculture.com.br/registration/',
          activeBasePath: './',
          label: 'Register',
          position: 'left',
        },
        // {
        //   to: 'https://medium.com/leaf-agriculture',
        //   label: 'Medium',
        //   position: 'left'
        // },
        {
          href: 'https://github.com/leaf-agriculture',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/leaf-agriculture',
        //   label: 'Log in',
        //   position: 'right',
        // },
        // {
        //   href: 'https://github.com/leaf-agriculture',
        //   label: 'Get API keys',
        //   position: 'right',
        // },
      ],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Leaf-Agriculture',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Leaf-Agriculture',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
}