import { Dispatch, FC, createContext, useReducer } from "react";
import { EventContextAction, EventContextType } from "./types";
import { eventReducer } from "./reducer";

export const initEventData: EventContextType = {
  animeData: [],
  initFlg: false,
};

export const dispatch = () => null;

export const EventContext = createContext<{
  state: EventContextType;
  dispatch: Dispatch<EventContextAction>;
}>({
  state: initEventData,
  dispatch,
});

export const EventProvider = (props) => {
  const [state, dispatch] = useReducer(eventReducer, initEventData);

  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {props.children}
    </EventContext.Provider>
  );
};
