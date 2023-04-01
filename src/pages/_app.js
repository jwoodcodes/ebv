import "../styles/globals.css";

import { Playfair_Display } from "@next/font/google";

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={playfair_display.className}>
      <Component {...pageProps} />
    </main>
  );
}
