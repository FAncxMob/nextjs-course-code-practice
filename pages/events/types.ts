import { createContext, useReducer } from "react";
import { initEventData } from "./store";
import { eventReducer } from "./reducer";

export type EventContextType = {
  animeData: AnimeDataType;
  initFlg: boolean;
};

export const ActionType = {
  UPDATE_EVENT: "UPDATE_EVENT",
  UPDATE_FLG: "UPDATE_FLG",
} as const;

export type ActionType = (typeof ActionType)[keyof typeof ActionType];

export type AnimeDataType = {
  id: string;
  title: string;
  genre: string;
  year: number;
  details: {
    episodes: number;
    studios: string[];
    description: string;
    characters: {
      name: string;
      role: string;
    }[];
    rating: number;
  };
}[];

export type UpdateEventPayloadType = {
  animeData: AnimeDataType;
};
export type UpdateFlgPayloadType = {
  initFlg: boolean;
};

export type eventPayload = {
  [ActionType.UPDATE_EVENT]: UpdateEventPayloadType;
  [ActionType.UPDATE_FLG]: UpdateFlgPayloadType;
};

export declare type ActionMap<
  M extends {
    [index: string]: unknown;
  }
> = {
  [key in keyof M]: M[key] extends undefined
    ? { type: key }
    : {
        type: key;
        payload: M[key];
      };
};

export type EventContextAction =
  ActionMap<eventPayload>[keyof ActionMap<eventPayload>];
