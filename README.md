# Before you run the app

Please go through the below details before you run the app.

## Environment Variables

For this app to work, you need to configure the following environment variables in your .env.local file so please create a .env.local file in the root of your project right next to readme.md and the file needs to look like this:

```
NEXT_PUBLIC_FOURSQUARE_API_KEY=<value>
AIRTABLE_API_KEY=<value>
AIRTABLE_BASE_KEY=<value>
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=<value>
```

## Common Errors

If you use Node.js version greater than 16, you may see this problem: https://github.com/vercel/next.js/issues/37300

Example Error:

```
(node:36337) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 33 ms (258 modules)
error - TypeError
    at normalizeAndValidateHeaderValue (node:internal/deps/undici/undici:4210:15)
    at HeadersList.append (node:internal/deps/undici/undici:4268:33)
    at fill (node:internal/deps/undici/undici:4235:19)
    at new Request (node:internal/deps/undici/undici:4982:13)
    at Agent.fetch2 (node:internal/deps/undici/undici:5539:29)
    at Object.fetch (node:internal/deps/undici/undici:6370:20)
    at fetch (node:internal/bootstrap/pre_execution:196:25)
    at fetchCoffeeStores (webpack-internal:///./lib/coffee-stores.js:33:28)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async getStaticProps (webpack-internal:///./pages/index.js:44:26) {
  page: '/'
}
```

Solution:
Downgrade Node.js version to 16 as v18 ships experimental fetch api that can have breaking changes.

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
