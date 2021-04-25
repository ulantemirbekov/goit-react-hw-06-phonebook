import { configureStore } from '@reduxjs/toolkit';
import reducerContacts from './contacts/contactsReducer';

const store = configureStore({
    reducer: reducerContacts,
});

export default store;