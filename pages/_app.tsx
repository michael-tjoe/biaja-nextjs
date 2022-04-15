import Button from "@components/Button";
import Layout from "@components/Layout";
import type { AppProps } from "next/app";
import "@styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Button>Hello</Button>
        <Button primary>Hello</Button>
      </div>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
