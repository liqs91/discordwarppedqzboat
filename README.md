# Discord Wrapped

Discord Wrapped uses your Discord data export to give you personalized stats about your time on Discord.

## Development

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-5JXB93BWX1
   ```
4. Start the development server using `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

To verify it's working:
- Open browser DevTools → Network tab
- Look for requests to `googletagmanager.com`
- Check the browser console for "✅ Google Analytics loaded successfully" message (in development mode)

## Dummy Data

If you want to generate dummy Discord data exports, use the dummy data generator using:

```
npm run dummy-data -- 5000
```

with `5000` being the size of array elements to generate per item - 5000 is approximately 500k lines of JSON.

## License

MIT
