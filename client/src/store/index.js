import { configureStore } from "@reduxjs/toolkit";
import authReducer, { authActions } from "./auth"; // Import reducer and actions

const store = configureStore({
  reducer: {
    auth: authReducer, // Attach authReducer to the "auth" key
  },
});

// Export the actions for use in components
export { authActions };
// Default export the store
export default store;
