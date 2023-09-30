/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SERVER_PORT: number;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
