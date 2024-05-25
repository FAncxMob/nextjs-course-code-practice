import { useRouter } from "next/router";

const ClientRelatedPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Client Detail Related Page</h1>
    </div>
  );
};

export default ClientRelatedPage;
