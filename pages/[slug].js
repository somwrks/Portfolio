import Template from "@/components/Template";
import { useRouter } from "next/router";
import data from "../public/data.json"
const SlugPage = ({toggleAudio}) => {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      {data && data[slug] && (
        <Template
          toggleAudio={toggleAudio}
          title={data[slug].title}
          image={slug}
          link={data[slug].link}
          detail1={data[slug].detail1}
          detail2={data[slug].detail2}
          detail3={data[slug].detail3}
        />
      )}
    </>
  );
};

export default SlugPage;