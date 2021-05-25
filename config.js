import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "arandomsha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "Core-List";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const ghUrl = "https://github.com/nexys-system/boilerplate_snowpack_bootstrap";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
