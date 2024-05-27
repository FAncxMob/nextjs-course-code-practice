import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { fetchDummyDaTA } from "../src/utils";
import { AnimeDataType } from "./events/types";
import { EventContext, EventProvider } from "./events/store";
import { animeData } from "./events/items";
import { updateEvent } from "./events/action";

const HomePage = () => {
  const router = useRouter();

  console.log(router.query);

  return <div>Home Page</div>;
};

export default HomePage;
