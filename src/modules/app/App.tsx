import './App.css';

import Router from '@router';

import * as packageJson from '../../../package.json';
import logo from './logo.svg';

const getHomePage = () => {
	const json: typeof packageJson & { homepage?: string } = { ...packageJson };
	return json.homepage;
};

const homepage = getHomePage();

const Welcome = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				# 🔥🚀⚛️{' '}
				<a
					className="App-link"
					href="https://create-react-app.dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					CRA
				</a>
				{' + '}
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					React
				</a>
				{' + '}
				<a
					className="App-link"
					href="https://redux-toolkit.js.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Redux(@reduxjs/toolkit)
				</a>
				{' + '}
				<a
					className="App-link"
					href="https://www.typescriptlang.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Typescript
				</a>
			</p>
			<p>Start your awesome project</p>
			{homepage && (
				<p>
					<a
						className="App-link"
						href={homepage}
						target="_blank"
						rel="noopener noreferrer"
					>
						coding style
					</a>
					{' 🏹'}
				</p>
			)}
		</header>
	</div>
);

const App = () => {
	return (
		<main>
			<Router />
			<Welcome />
		</main>
	);
};

export default App;
