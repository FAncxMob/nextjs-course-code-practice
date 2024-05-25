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

  const loadDetail = () => {
    // navigate
    router.push({
      pathname: "/client/[clientId]/[clientRelatedId]",
      query: {
        clientRelatedId: "test-clientRelatedId",
        clientRelatedName: "test-clientRelatedName",
        clientId: "text-client",
      },
    });
  };

  return (
    <div>
      <h1>Client Detail Page</h1>
      <ul>
        {targetClientRelatedList?.relatedClients.map((relatedClient) => {
          return (
            <li key={relatedClient.id}>
              <Link
                href={{
                  pathname: "/client/[clientId]/[clientRelatedId]",
                  query: {
                    clientRelatedId: relatedClient?.id,
                    clientRelatedName: relatedClient?.name,
                    clientId: clientId,
                  },
                }}
              >
                {relatedClient.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button onClick={loadDetail}>Load RelatedDetail</button>
    </div>
  );
};

export default clientDetailPage;
