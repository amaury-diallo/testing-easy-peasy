import { StoreProvider } from "easy-peasy";
import ProtectRoute from "../components/auth/protect-route";
import store from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ProtectRoute>
        <Component {...pageProps} />
      </ProtectRoute>
    </StoreProvider>
  );
}

export default MyApp;
