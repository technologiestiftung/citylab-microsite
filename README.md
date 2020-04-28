# CityLAB Site

The site is build upon [Nuxt.js](https://nuxtjs.org/) (a static site generator based on Vue.js) and [Bulma](https://bulma.io/) (CSS framework) and is deployed on Netlify.

Table of contents:

## Project structure

### Pages

Along with using [Nuxt.js](https://nuxtjs.org/) the project is structured in `pages` and `components`. Each `.vue` file inside the `pages directory` is rendered as `https://yoururl.com/nameofvuefile.html`. If you nest your files inside folders these paths are respected in the rendered site like `https://yoururl.com/folder/nameofvuefile.html`.

### Components

The modular blocks that get rendered inside your pages can be found inside `components/`. If you want to add a new component keep in mind to pass the `content` and `lang` as a prop to  Here an example of the basic structure of a component:

```vue
<template>
  <div class="wrapper">Your content here</div>
</template>

<script>
  export default {
    name: 'name of component',
    props: ['content', 'lang'],
    ...
  }
</script>
<style>
  .wrapper {
    width: 100%;
    ...
  }
</style>
```

## Content

The content of the site is sourced from a `content.js` file located at `assets/` and a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc) (that contains multiple tables) which is accessible to the Team of the CityLAB. If you plan to create new subpages for the site that:

### Are created once ...
then add these to the `content.js`. This file is contains both english and german content. If you want to add new content for a created page – we call `paragraph` – add the content fields as an `object` nested inside the objects `en` and `de` like this:

```
en: {
  ...
  'paragraph': {
    title: 'your title here',
    description: 'your description here'
  },
  ...
},
de: {
  'paragraph': {
    title: 'Dein Titel hier',
    description: 'Deine Beschreibung hier'
  },
},
...
```

We pass the content `object` as a prop to your component and link the provided keys to the markup provided by your component. If we take the example from above the `paragraph.vue` component would look like this:

```vue
<template>
  <div class="wrapper">
    <h1 v-html="this.content[this.lang]['subpage']['title']"></h1>
    <p v-html="this.content[this.lang]['subpage']['description']"></p>
  </div>
</template>

<script>
  export default {
    name: 'Paragraph',
    props: ['content', 'lang'],
  }
</script>
<style>
  .wrapper {
    width: 100%;
    ...
  }
</style>
```

If you want to provide content that is updated regulary (e.g. Newsletter, Projects, Events, Exhibits) you use the table inside the [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1rTyfInS6NjTifbru61mWEqICyv9uuMVSSk7NZTABLQc) for content that exists in two languages you find a `_en` and `_de` at the name of the table. In the following you find a description of exisiting columns for the existing tables:

### projects_de and projects_en table

visible |	defaultImg | featured | publisher | dirName | projectName | projectSubline | projectSubSubline | headlineIntro | contentIntro | headlineBlockOne | contentBlockOne | headlineBlockTwo | contentBlockTwo | headlineBlockThree | contentBlockThree | headlineBlockFour | contentBlockFour | socialDescription | link | logo
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Defines, if the project is visible | Sets defaultImg if no other images are provided | Adds project to featured section at start pages | Name of publisher | url path | name of project | project subline | second project subline | title of first paragraph | text of first paragraph | title of second paragraph | description of seconds paragraph | title of third paragraph | description of third paragraph | title of fourth paragraph | descpription of fourth paragraph | title of fifth pargraph | description of fifth paragraph | text that is visible at social tiles, when the page is shared | url where the link – if provided – is pointing to | set to TRUE or FALSE is a logo should be displayed

### events table

visible | format | calendarImp | eventLanguage | dirName | date | startTime | endTime | dateTime | eventName | subline | subsubline | headlineIntro | contentIntro | headlineBlockOne | contentBlockOne | headlineBlockTwo | contentBlockTwo | headlineBlockThree | contentBlockThree | headlineBlockFour | contentBlockFour | websiteSummary | phoneSummary | dateSummary | organiserSummary | mailSummary | addressSummary | registerInfo | registerLink | socialDescription | logo
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
Defines, if the event is visible | Set the format of event, e.g. workshop, meetup | TRUE or FALSE defines if calendar import is available | set language of event: de, end | url path | set date in following format: YYYY-MM-DD | set start time | set end time | creates automatic date format | set the name of the event | set subline of event | set second subline of event | title of first paragraph | text of first paragraph | title of second paragraph | description of seconds paragraph | title of third paragraph | description of third paragraph | title of fourth paragraph | descpription of fourth paragraph | title of fifth pargraph | description of fifth paragraph | website url in summary box | phone number in summary box | date of event in summary box | organiser in summary box | e-mail in summary box | address in summary box | registration link if existing | text that is visible at social tiles, when the page is shared | set to TRUE or FALSE is a logo should be displayed

### exhibits_de and exhibits_en
visible | exhibitName | exhibitPublisher | publisherLink | exhibitDescription | exhibitDescriptionLong | imgName | date
| --- | --- | --- | --- | --- | --- | --- | --- |
Defines, if the project is visible | title of the exhibit | author name of exhibit, separated by comma! | links of the authors, separated by comma! | short description text of the exhibit | long description texts of the exhibit | image name e.g: name.jpg | Date in the followin format: Mai 2020 |

### newsletter

date | title_de | title_en | subtitle_de | subtitle_en | url_de | url_en
| --- | --- | --- | --- | --- | --- | --- |
date in format like: Juni 2020 | german title of NL | english title of NL | german subtitle of NL | english subtitle of NL | url to german html version of NL | url to english version of NL

> You may add new tables to the spreadsheet as the site grows further.

## Assets

All imagery, logos etc. are located at `static/images/...`. If you want to add images to a `project`, `event`, `exhibit` or `board` put it in the specific folder and take the existing files as an example to add yours.

> The `directoryName` has to match with the name you provided for your item at the google spreadsheet.

Events:
directoryName_hero.jpg
directoryName_social_media.jpg
directoryName_logo.jpg (optional)

Projects:
directoryName_hero.jpg
directoryName_social_media.jpg
directoryName_tile.jpg
directoryName_lazy_tile.jpg (1% sized image of tile that is rendered until the large tile is downloaded)
directoryName_logo.jpg (optional)

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
