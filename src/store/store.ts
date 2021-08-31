import config from '@config';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: combineReducers({}),
	devTools: !config.APP_ENV.isProd()
});

export default store;
