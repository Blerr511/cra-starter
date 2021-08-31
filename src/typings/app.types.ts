export enum AppMode {
	dev = 'development',
	local = 'local',
	prod = 'production'
}

export class AppEnv {
	constructor(public readonly env: string) {}

	isProd() {
		return this.env == AppMode.prod;
	}

	isLocal() {
		return this.env === AppMode.local;
	}

	isDev() {
		return this.env === AppMode.dev;
	}
}
