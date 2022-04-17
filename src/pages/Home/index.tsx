import Breadcrumb from "@components/Breadcrumb";
import Button from "@components/Button";
import { useRouter } from "next/router";

import { styHomeWrapper } from "./styles";

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
    </div>
  );
}

export default HomePage;
