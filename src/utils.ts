import { animeData } from "../pages/events/items";
import { AnimeDataType } from "../pages/events/types";

const myFetch = (): Promise<AnimeDataType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(animeData);
    }, 1000);
  });
};

export const fetchDummyDaTA = async () => {
  const data: AnimeDataType = await myFetch();
  return data;
};
