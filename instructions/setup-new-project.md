# Setup new project

Some things within this boilerplate are project specific and therefore needs to be adjusted in the start. Follow this list:

1. Search within the entire repository for `TODO:` and adjust the comments.
2. Setup variables for our pipelines in Settings --> CI/CD --> Variables:
   1. **ENTIRE_HOSTNAME_STAGING** - URL to isdemo for the project (e.g. boilerplate has _nextjs-boilerplate.isdemo.se_).
   2. **ENTIRE_HOSTNAME_STORYBOOK** - URL to Storybook for the project (e.g. boilerplate has _storybook.nextjs-boilerplate.isdemo.se_).
   3. **CF_ACCESS_CLIENT_ID_STAGING** - Cloudflare access client id. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
   4. **CF_ACCESS_CLIENT_SECRET_STAGING** - Cloudflare access client secret. Set as masked and use values from [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/ci_cd).
3. Setup branches in Settings --> Repository:
   1. **Default branch** - Set this to _develop_.
   2. **Protected branches** - Protect _master_ and _develop_ with the same settings as [here](https://git.interactivesolutions.se/internal/nextjs-boilerplate/-/settings/repository).
4. Synchronize design variables with the designer. Some critical variables to adjust as soon as possible:
5. **Palettes & surfaces** - Set hex colors.
6. **Typography** - Set all typographies.
7. Setup Apollo uri and images domains:
   1. **.env** - Within desired file update `NEXT_PUBLIC_APOLLO_URI` and `NEXT_PUBLIC_IMAGES_DOMAINS`.
   2. **codegen/default.config.ts** - Update `schema`.
8. Search within the entire repository for `nextjs-boilerplate` and replace it with the project name.
9. Replace namespace `internal` with the namespace that is for your project.
10. Want to disable SSR because e.g. you're going to create a backoffice? Go to `src/pages/_app.tsx` and use the commented out code.
11. Setup [Sentry](https://sentry.interactivesolutions.se/) and edit these:
    1. **process.env.NEXT_PUBLIC_SENTRY_DSN** - Within `.gitlab-ci.yml`.
    2. **sentry.properties** - Edit `defaults.project`.
12. Remove `src/pages/books`.
13. TODO: Write how to setup provisioning...
