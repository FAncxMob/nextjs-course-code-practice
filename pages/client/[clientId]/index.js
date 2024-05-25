import Link from "next/link";
import { useRouter } from "next/router";
import { clientRelatedLists } from "../item";

const clientDetailPage = () => {
  const router = useRouter();
  const clientId = router.query.clientId;
  const targetClientRelatedList = clientRelatedLists.find(
    (client) => client.clientId === clientId
  );
  console.log(router.query, clientId, targetClientRelatedList);

  return (
    <div>
      <h1>Client Detail Page</h1>
      <ul>
        {targetClientRelatedList.relatedClients.map((relatedClient) => {
          return (
            <li key={relatedClient.id}>
              <Link
                href={{
                  pathname: "/client/[clientId]/[clientRelatedId]",
                  query: {
                    relatedClientId: relatedClient.id,
                  },
                }}
              >
                {relatedClient.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default clientDetailPage;
