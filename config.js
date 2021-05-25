import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "Core-List";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
export const ghUrl = "https://github.com/nexys-system/core-list";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
