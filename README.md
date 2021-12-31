This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Setup Local Environment with Coffee Stores

You need to setup a few API keys for this project to be setup correctly otherwise you won't see any coffee stores.

- [Unsplash Access Key](https://unsplash.com/documentation)
- [Airtable Base and API Key](https://www.airtable.com/api)
- [Foursquare API Key](https://developer.foursquare.com/docs/migrate-to-newest-places-api-version#generating-api-keys)

For that, you can create a .env.local file in your project as [shown in docs](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables) that will look like this:

```
AIRTABLE_BASE_KEY=<REPLACE THIS>
AIRTABLE_API_KEY=<REPLACE THIS>
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<REPLACE THIS>
NEXT_PUBLIC_FOURSQUARE_API_KEY=<REPLACE THIS>
```

You can retrieve the above environment values by referring their docs linked above.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
