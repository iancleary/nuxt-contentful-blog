
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [CalVer Version Scheme](https://calver.org/).

## [Unreleased]

### Added

- RSS, using `@nuxtjs/feed` and porting [Dawntraoz's article](https://www.dawntraoz.com/blog/adding-rss-feed-to-my-blog-made-with-nuxt-storyblok) to use Contentful.
- `html: true` markdown-it parameter to fix [#333](https://github.com/icancclearynow/nuxtjs-contentful-blog/issues/333)
- `.env.example` file and description of env variables per [#345](https://github.com/icancclearynow/nuxtjs-contentful-blog/issues/345)

## [v2021.04.0]

### Added

- TailwindUI BlogSections per [#159](https://github.com/iancleary/portfolio/pull/159)
- [ESLint GitHub Action](https://github.com/marketplace/actions/eslint-action)
- Medium like [reading-time](https://github.com/ngryman/reading-time) estimation per [#163](https://github.com/iancleary/portfolio/pull/163)
- Person content in Vuex store per [#165](https://github.com/iancleary/portfolio/pull/165)
- Blog landing page
- Favicons generated with <https://favicon.io/favicon-generator/>
- custom `app.html` to set body background color
- plausible.io analytics

### Changed

- Migrated Framework to NuxtJS.
- Incorporating Contentful Community Plan
- Use UTC js date methods in BlogSectionCard component per [#160](https://github.com/iancleary/portfolio/pull/160/commits/989a8df6981e43c09045f16562f316bda81e7648)
- Sort BlogSectionCards to show most recent first per [#160](https://github.com/iancleary/portfolio/pull/160/commits/989a8df6981e43c09045f16562f316bda81e7648)
- Repeated Bottom Dots across bottom to span display regardless of breakpoint
- sm breakpoint on Hero.vue to have smoother scroll experience on phones
- Moved custom error page to layouts folder, per [NuxtJS layouts#error-page](https://nuxtjs.org/guides/directory-structure/layouts#error-page)
- blog articles moved to /blog/_slug

###

- Removed `@nuxtjs/fontawesome` dependency (replaced with <https://simpleicons.org>, <https://github.com/mainvest/vue-simple-icons>)

## [v2020.1.0]

### Added

- Source Articles from dev.to API <https://docs.dev.to/api/#tag/articles>, with Vue documentation [example](https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)
- webpack config for '@' path alias
- CSS for blocking Font-Awesome rendering before loaded, per [#137](https://github.com/iancleary/iancleary.me/issues/137)
- Tailwindcss purge: [Controlling File Size](https://tailwindcss.com/docs/controlling-file-size)

### Changed

- Changed to [CalVer Version Scheme](https://calver.org/) YYYY.MINOR.MICRO

### Removed

- Dropped typescript
- Deleted src/services folder (posts come from ArticleList component)

## [v0.9.0]

### Added

- Dependabot badge

### Changed

- Changed notebook repo to [dockerfiles](https://github.com/iancleary/dockerfiles)
- Changed CI provider for ansible-desktop to GitHub Actions

## [v0.8.0]

### Added

- Card CSS Classes that cascade Blog and Project Cards
- Lazy Hydration via [vue-lazy-hydration](https://github.com/maoberlehner/vue-lazy-hydration)
  - Header and Hero when-idle as they are shown first
  - Projects, Posts, BottomDots, and Footer when-visible
- Added Travis-CI Badges to Project Cards
- Added 404 page with link home and blog posts (used to have blog routes)

### Changed

- Refactored Index page to use shadows, rounding, and other Refactoring UI concepts
- Moved "Ian Cleary" to left portion of header
- Fixed `overflow-x-hidden` on Index and BottomDots component (dots were too wide on narrow width displays)
- upgraded tailwindcss from 1.2.0 to 1.3.4
- Refactored Projects to responsive component with props per [#81](https://github.com/iancleary/iancleary.me/pull/81)

### Removed

- removed `.devcontainer` folder (no plans to maintain)

## [v0.7.0]

### Added

- Converted to typescript starter:  [xerebede/gridsome-starter-typescript](https://github.com/xerebede/gridsome-starter-typescript)
- Added `rel="noopener"` to social links per web.dev scoring
- Added alt text, in the form of svg title blocks, to social links
- Added theme-switcher from <gridsome.org>, with [css from vars.scss](https://github.com/gridsome/gridsome.org/blob/2d124ac9843dc39e782e91b6bcf54b21988835ee/src/assets/style/vars.scss)
- Added `vue-fontawesome` icons to Header
- Added `DEV` badge with Font Awesome, source: [DEV Badges](https://dev.to/p/badges)
- 404 Page

### Changed

- Moved static folder to `~/src/assets`
- Uncommented `.vscode` fro `.gitignore` to have cross machine settings.json (eslint preferences on save)
- Default to `'dark'` theme
- Updated main.css to properly pass through variables to `light` theme

### Removed

- Removed console logging from HelloService.sayHello("Gridsome") per web.dev scoring
- Removed `class="mx-auto sm:mx-0"` from `unDraw/developer.svg` per web.dev scoring
- Removed [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) dependency

## [v0.6.1]

### Added

- Added mobile touch events using [vue2-touch-events](https://github.com/jerrybendy/vue-touch-events) per PR [#34](https://github.com/iancleary/iancleary.me/pull/34)
- Added alt-text and svg immediate loading per PR [#33](https://github.com/iancleary/iancleary.me/pull/33)
- Added navbar automatic hiding on scroll down, showing on scroll up, and opaque responsive on mobile per PR [#30](https://github.com/iancleary/iancleary.me/pull/30)

### Changed

- changed URL for [wiki re-brand](https://github.com/iancleary/wiki/pull/4), from dev-notes
- refactored navbar to components and fixed margin
- commented out scroll-to as it's a headache and not worth it
- Fixed changelog links

## [v0.6.0] - 2019-09-22

- Refactored to Gridsome Portfolio Starter per PR [#17](https://github.com/iancleary/iancleary.me/pull/17)
- Conception of the Changelog!

[Unreleased]: https://github.com/iancleary/iancleary.me/compare/v2021.04.0...HEAD
[v2021.04.0]: https://github.com/iancleary/iancleary.me/releases/tag/v2021.04.0
[v2020.1.0]: https://github.com/iancleary/iancleary.me/releases/tag/v2020.1.0
[v0.9.0]: https://github.com/iancleary/iancleary.me/releases/tag/v0.9.0
[v0.8.0]: https://github.com/iancleary/iancleary.me/releases/tag/v0.8.0
[v0.7.0]: https://github.com/iancleary/iancleary.me/releases/tag/v0.7.0
[v0.6.1]: https://github.com/iancleary/iancleary.me/releases/tag/v0.6.1
[v0.6.0]: https://github.com/iancleary/iancleary.me/releases/tag/v0.6.0
