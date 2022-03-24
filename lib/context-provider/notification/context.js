import React from "../../../_snowpack/pkg/react.js";
const initialState = {
  notifications: [],
  setNotification: (_t) => void 0,
  setNotifications: (_t) => void 0,
  rmNotification: (_idx) => void 0
};
const CustomContext = React.createContext(initialState);
export const useToastContext = () => React.useContext(CustomContext);
export default CustomContext;
