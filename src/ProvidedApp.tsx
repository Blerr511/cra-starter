import App from '@modules/app';
import store from '@store';
import { Provider } from 'react-redux';

const ProvidedApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

export default ProvidedApp;
