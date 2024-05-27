import { Reducer } from "react";
import { ActionType, EventContextAction, EventContextType } from "./types";

export const eventReducer: Reducer<EventContextType, EventContextAction> = (
  state: EventContextType,
  action: EventContextAction
) => {
  console.log(action, "action");
  switch (action.type) {
    case ActionType.UPDATE_EVENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
