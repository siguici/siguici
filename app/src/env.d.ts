/// <reference path="../.astro/types.d.ts" />
/// <reference path="../../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly APP_NAME: string;
	readonly SERVER_PORT: number | string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
