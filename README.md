# Discord Wrapped

Discord Wrapped uses your Discord data export to give you personalized stats about your time on Discord.

## Development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Environment

Copy `env.example` to `.env.local` (or set in Vercel):
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` - Google Analytics ID (e.g., G-5JXB93BWX1)
- `NEXT_PUBLIC_SITE_URL` - Site URL (e.g., https://discordwarpped.qzboat.com)

## Google Analytics Configuration

The project includes Google Analytics integration. To enable it:

1. Create a `.env.local` file in the root directory
2. Add your Google Analytics Measurement ID:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-5JXB93BWX1
   ```
3. Restart the development server

The Google Analytics script will automatically:
- Track page views on route changes
- Track custom events via the `trackEvent()` function
- Work in both development and production environments

## Dummy Data

If you want to generate dummy Discord data exports, use the dummy data generator:

```bash
npm run dummy-data -- 5000
```

with `5000` being the size of array elements to generate per item - 5000 is approximately 500k lines of JSON.

## Deploy

- Push to GitHub and connect to Vercel.
- Add your environment variables to Vercel env, redeploy.

## Related Products

Check out our other tools:
- [Photo to URL](https://phototourl.com) - Turn photos into shareable links
- [Circle Crop Image](https://circlecropimage.qzboat.com) - Round the corners of images
- [qzboat](https://www.qzboat.com) - Professional AI SaaS Platform

## License

MIT
