export const toPath = (tabName: string, pathPrefix: string = '') =>
  pathPrefix + '/' + encodeURIComponent(tabName);
