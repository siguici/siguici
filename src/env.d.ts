/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SERVER_PORT: number | string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
