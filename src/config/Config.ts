import { AppEnv } from '@typings/app.types';

export class Config {
	public readonly APP_ENV = new AppEnv(process.env.NODE_ENV);
}
