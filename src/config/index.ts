import { validate } from 'class-validator';

import { Config } from './Config';
export * from './Config';

const config = new Config();

validate(config).then((errors) => {
	errors.forEach(console.error);
});

export default config;
