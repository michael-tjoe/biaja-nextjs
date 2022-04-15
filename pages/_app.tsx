import Button from "@components/Button";
import Layout from "@components/Layout";
import Input from "@components/Search";
import Select from "@components/Select";

import type { AppProps } from "next/app";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
