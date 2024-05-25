import { useRouter } from "next/router";
import { clientRelatedLists } from "../item";

const ClientRelatedPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Client Detail Related Page</h1>
      <div>
        {router.query.clientRelatedId + "   " + router.query.clientRelatedName}
      </div>
    </div>
  );
};

export default ClientRelatedPage;
