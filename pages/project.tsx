import Head from "next/head";
import { BASE_URL, PAGE_SIZE, TOTAL_DATA } from "@constants/api";
import PersonalProject from "@pages/PersonalProject";
import { countResultLength } from "@utils/countResultLength";

const ProjectPage = ({ data }) => (
  <>
    <Head>
      <title>Project</title>
    </Head>
    <PersonalProject initialData={data} />
  </>
);

export async function getServerSideProps() {
  const res = await fetch(
    `${BASE_URL}&page=1&results=${countResultLength(1, PAGE_SIZE, TOTAL_DATA)}`
  );
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

export default ProjectPage;
