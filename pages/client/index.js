import { useRouter } from "next/router";
import Link from "next/link";
import { clientRelatedLists } from "./item";

const Client = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clientRelatedLists.map((client) => {
          return (
            <li key={client.clientId}>
              <Link href={`/client/${client.clientId}`}>
                {client.clientName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Client;
