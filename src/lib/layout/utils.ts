export const toPath = (tabName: string) =>
  '/' + tabName.replace(/[ \/]/g, '-').toLocaleLowerCase();
