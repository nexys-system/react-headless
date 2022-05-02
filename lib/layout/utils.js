export const toPath = (tabName) => "/" + tabName.replace(/[ \/]/g, "-").toLocaleLowerCase();
