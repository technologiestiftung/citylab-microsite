# CityLAB Site

The site is build upon Nuxt.js (which is based on Vue.js) – a static site generator.


Table of contents:

- structure of the project
  - logic of two languages
  - content js
  - how to setup a new site
  - where does the content come from? google sheets
  - assets; where to put them

  all content tables
  https://docs.google.com/spreadsheets/d/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc
  
  1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc

  JSON API
  https://spreadsheets.google.com/feeds/list/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc//public/values?alt=json

## Update site

This site is deployed by Netlify (Net-liff-eye). A push to ```master``` will automatically update the site and set live. If you have bigger updates, please create a new branch and merge them later.

## Add events

- All images are located inside the folder of the website at ```static/images/events/```.

### Hero images

- Hero images should have a resolution of **1880px x 940px** and are required to create a new event. If you don't have any software to crop your images you can use this [Online Photo Editor](https://www.befunky.com/create/crop-photo/).

- Please use the following naming convention: ```dirname_hero.jpg```.

### Images for Social media

- Social media images should have a resolution of **1086px x 573px** and are required to create a new event.
- Please use the following naming convention: ```dirname_social_media.jpg```.



``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
