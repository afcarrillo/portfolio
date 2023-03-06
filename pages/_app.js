import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Font Awesome icons (free version) */}
      <Script
        src="https://use.fontawesome.com/releases/v6.1.0/js/all.js"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
      {/* Bootstrap core JS */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
    </>
  );
}
