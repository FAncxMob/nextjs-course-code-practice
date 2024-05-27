import { EventContext } from "./store";
import { ActionType, EventContextAction, eventPayload } from "./types";

export const updateEvent: (
  payload: eventPayload[typeof ActionType.UPDATE_EVENT]
) => EventContextAction = (payload) => {
  return {
    type: ActionType.UPDATE_EVENT,
    payload,
  };
};
