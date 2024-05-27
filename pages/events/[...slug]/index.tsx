import { useRouter } from "next/router";
import { EventProvider } from "../store";

const EventSlugPage = () => {
  const router = useRouter();

  console.log(router.query);
  return <div>EventSlugPage Page</div>;
};

const Page = () => {
  return (
    <EventProvider>
      <EventSlugPage></EventSlugPage>
    </EventProvider>
  );
};

export default Page;
