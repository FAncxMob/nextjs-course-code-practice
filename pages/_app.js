import "../styles/globals.css";
import { EventContext, EventProvider } from "./events/store";
function MyApp({ Component, pageProps }) {
  return (
    <EventProvider>
      <Component {...pageProps} />
    </EventProvider>
  );
}

export default MyApp;
