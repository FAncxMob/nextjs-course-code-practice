import { useRouter } from "next/router";

const ProtfolioProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>ProtfolioProjectPage Page</h1>
    </div>
  );
};

export default ProtfolioProjectPage;
