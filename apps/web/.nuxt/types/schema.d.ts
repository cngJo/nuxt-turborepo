import { NuxtModule } from "nuxt/schema";
declare module "nuxt/schema" {
  interface NuxtConfig {
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<
      infer O
    >
      ? Partial<O>
      : Record<string, any>;
    modules?: (
      | NuxtModule
      | string
      | [NuxtModule | string, Record<string, any>]
      | ["@nuxt/devtools", NuxtConfig["devtools"]]
      | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]]
      | ["@nuxt/telemetry", NuxtConfig["telemetry"]]
    )[];
  }
  interface RuntimeConfig {
    app: {
      baseURL: string;

      buildAssetsDir: string;

      cdnURL: string;
    };
  }
  interface PublicRuntimeConfig {}
}
