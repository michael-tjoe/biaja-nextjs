import Head from "next/head";
import { BASE_URL } from "@constants/api";
import PersonalProject from "@pages/PersonalProject";

const Home = ({ data }) => (
  <>
    <Head>
      <title>Ajaib - Personal Project</title>
    </Head>
    <PersonalProject initialData={data} />
  </>
);

export async function getServerSideProps() {
  const res = await fetch(`${BASE_URL}&page=1`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data?.results || [] },
  };
}

export default Home;
