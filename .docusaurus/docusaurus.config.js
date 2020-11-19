export default {
  "title": "Leaf",
  "tagline": "The easiest way to connect agriculture data across platforms",
  "organizationName": "gmbueno",
  "projectName": "docs",
  "baseUrl": "/docs/",
  "url": "https://gmbueno.github.io",
  "favicon": "img/icon4dark_mode.png",
  "plugins": [
    "/Users/gmbueno/Desktop/LEAF/hackathon/docs/node_modules/docusaurus-lunr-search/src/index.js"
  ],
  "themeConfig": {
    "googleAnalytics": {
      "trackingID": "UA-151987025-2"
    },
    "navbar": {
      "logo": {
        "alt": "logo",
        "src": "img/logo4light_mode.png",
        "srcDark": "img/logo4dark_mode.png",
        "href": "/docs/docs"
      },
      "items": [
        {
          "to": "https://withleaf.io",
          "activeBasePath": "./",
          "label": "Website",
          "position": "left"
        },
        {
          "to": "https://withleaf.io/careers/",
          "activeBasePath": "./",
          "label": "Work with us",
          "position": "left"
        },
        {
          "to": "https://medium.com/leaf-agriculture",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "https://withleaf.io/registration/",
          "activeBasePath": "./",
          "label": "Register",
          "position": "left"
        },
        {
          "href": "https://github.com/leaf-agriculture",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "welcome",
          "sidebarPath": "/Users/gmbueno/Desktop/LEAF/hackathon/docs/sidebars.js",
          "editUrl": "https://github.com/Leaf-Agriculture/docs/tree/master"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://youtu.be/gXVfKrud49c?t=73"
        },
        "theme": {
          "customCss": "/Users/gmbueno/Desktop/LEAF/hackathon/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": []
};