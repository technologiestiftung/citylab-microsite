import pkg from "./package";
// import PurgecssPlugin from "purgecss-webpack-plugin";
// import glob from "glob-all";
// import path from "path";
import axios from "axios";

async function dynamicRoutes() {
  try {
    const result = axios
      .all([
        axios.get(
          "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/3/public/values?alt=json"
        ), // events
        axios.get(
          "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/1/public/values?alt=json"
        ), // projects
        axios.get(
          "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json"
        ), // projects_en
      ])
      .then(
        axios.spread((events, projects, projects_en) => {
          // do something with both responses
          let entriesEvents = events.data.feed.entry;
          let entriesProjects = projects.data.feed.entry;
          let entriesProjectsEn = projects_en.data.feed.entry;

          const eventRoutes = entriesEvents.map((entry) => {
            if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
              return "/events/" + entry.gsx$dirname.$t;
            }
            return;
          });

          const projectRoutes = entriesProjects.map((entry) => {
            if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
              return "/projects/" + entry.gsx$dirname.$t;
            }
            return;
          });

          const projectEnRoutes = entriesProjectsEn.map((entry) => {
            if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
              return "/projects_en/" + entry.gsx$dirname.$t;
            }
            return;
          });

          let all = [...eventRoutes, ...projectRoutes, ...projectEnRoutes];
          all = all.filter((elem) => {
            return elem !== undefined;
          });

          return all;
        })
      )
      .catch((err) => {
        console.error(err);
      });

    return result;
  } catch (error) {
    console.error(error);
    // throw error;
  }
}
export default {
  generate: {
    routes: dynamicRoutes,

    // function () {
    // TODO: wrap that
    //
    //   return axios
    //     .all([
    //       axios.get(
    //         "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/3/public/values?alt=json"
    //       ), // events
    //       axios.get(
    //         "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/1/public/values?alt=json"
    //       ), // projects
    //       axios.get(
    //         "https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc/2/public/values?alt=json"
    //       ), // projects_en
    //     ])
    //     .then(
    //       axios.spread((events, projects, projects_en) => {
    //         // do something with both responses
    //         let entriesEvents = events.data.feed.entry;
    //         let entriesProjects = projects.data.feed.entry;
    //         let entriesProjectsEn = projects_en.data.feed.entry;

    //         const eventRoutes = entriesEvents.map((entry) => {
    //           if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
    //             return "/events/" + entry.gsx$dirname.$t;
    //           }
    //           return;
    //         });

    //         const projectRoutes = entriesProjects.map((entry) => {
    //           if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
    //             return "/projects/" + entry.gsx$dirname.$t;
    //           }
    //           return;
    //         });

    //         const projectEnRoutes = entriesProjectsEn.map((entry) => {
    //           if (entry && entry.gsx$dirname && entry.gsx$dirname.$t) {
    //             return "/projects_en/" + entry.gsx$dirname.$t;
    //           }
    //           return;
    //         });

    //         let all = [...eventRoutes, ...projectRoutes, ...projectEnRoutes];
    //         all = all.filter((elem) => {
    //           return elem !== undefined;
    //         });

    //         return all;
    //       })
    //     )
    //     .catch((err) => {
    //       console.error(err);
    //     });

    //   // return axios.get(`https://spreadsheets.google.com/feeds/list/1OB2kDr4rAyGZ_LuntV1ao7FeA4_vZgP95arR5RGk7M4/od6/public/values?alt=json`)
    //   //   .then((res) => {
    //   //     let entries = res.data.feed.entry;
    //   //     const eventRoutes = entries.map((entry) => {
    //   //       return '/events/' + entry.gsx$dirname.$t
    //   //     })

    //   //     return eventRoutes;
    //   //   }).then((eventRoutes) => {

    //   //   })
    // },
  },

  mode: "universal",
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%sCityLAB",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      { hid: "og:title", property: "og:title", content: "CityLAB Berlin" },
      {
        hid: "og:description",
        property: "og:description",
        content: "CityLAB Berlin",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://citylab-berlin.org/images/social-graph.jpg",
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "CityLAB Berlin",
      },
      {
        hid: "twitter:image:alt",
        property: "twitter:image:alt",
        content: "CityLAB Berlin",
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "https://citylab-berlin.org/images/social-graph.jpg",
      },
    ],
    script: [{ src: "https://citylab-berlin.org/matomo.js" }],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/plugins/fontawesome.js'
  ],
  // buildModules: ["~/modules/scraper"],
  buildModules: [
    // Simple usage
    "nuxt-purgecss",

    // With options
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    [
      "nuxt-fontawesome",
      {
        component: "font-awesome-icon",
        imports: [
          //import 2 icons from set
          // please note this is PRO set in this example,
          // you must have it in your node_modules to actually import
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: [
              "faEnvelope",
              "faBicycle",
              "faNewspaper",
              "faStamp",
              "faUserSecret",
              "faGenderless",
              "faGlobeEurope",
              "faInfo",
              "faUsers",
            ],
          },
        ],
      },
    ],
  ],

  /*
   ** Build configuration
   */
  build: {
    // parallel: true,
    // cache: true,
    // hardSource: true,
    analyze: false,
    extractCSS: true,
    ignoreOrder: true,
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, _ctx) {
    //   // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
    //   // for more information about purgecss.
    //   config.plugins.push(
    //     new PurgecssPlugin({
    //       paths: glob.sync([
    //         path.join(__dirname, "./pages/**/*.vue"),
    //         path.join(__dirname, "./layouts/**/*.vue"),
    //         path.join(__dirname, "./components/**/*.vue"),
    //       ]),
    //       whitelist: ["html", "body"],
    //     })
    //   );
    // },
  },
};
