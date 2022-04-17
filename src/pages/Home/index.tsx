import Image from "next/image";
import { useRouter } from "next/router";

import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button";

import lightHouseStatsImg from "@assets/lighthouse.png";
import coverageImg from "@assets/coverage.png";
import { styHomeWrapper, styStatsWrapper } from "./styles";

function HomePage() {
  const router = useRouter();

  const handleClickRedirect = () => {
    router.push("/project");
  };

  return (
    <div className={styHomeWrapper}>
      <Breadcrumb
        routes={[
          {
            label: "Home",
            path: "/home",
          },
        ]}
      />
      <h1>Homepage</h1>

      <p>
        Created using Nextjs, Emotion Css for critical path rendering during
        ssr, Reactjs, React Testing Library and Jest for testing
      </p>

      <Button onClick={handleClickRedirect} primary>
        Jump to the project
      </Button>

      <h2>Stats</h2>
      <p>Coverage Statement: 87.63%</p>

      <div className={styStatsWrapper}>
        <Image alt="" src={lightHouseStatsImg} layout="intrinsic" />
        <Image alt="" src={coverageImg} layout="intrinsic" />
      </div>
    </div>
  );
}

export default HomePage;
