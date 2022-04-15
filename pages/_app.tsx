import Button from "@components/Button";
import Layout from "@components/Layout";
import Input from "@components/Search";

import type { AppProps } from "next/app";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Button>Hello</Button>
        <Button primary>Hello</Button>
        <Input />
      </div>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
