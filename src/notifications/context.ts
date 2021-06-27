import React from 'react';
import { Notification } from './type';

type State = {
  notifications: Notification[];
  setNotification: (t: Notification) => void;
  rmNotification: (idx: number) => void;
};

const initialState: State = {
  notifications: [],
  setNotification: (t: Notification) => undefined,
  rmNotification: (idx: number) => undefined
};

const CustomContext = React.createContext<State>(initialState);

export const useToastContext = () => React.useContext(CustomContext);

export default CustomContext;
