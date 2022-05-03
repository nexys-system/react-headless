export const delay = (ms: number = 500) =>
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * puts content into a file that is being downloaded
 * @param reportName https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript
 * @see fileName: filename of out
 * @param byte
 * @param type
 */
export const saveByteArray = (
  content: any | string, // Buffer
  filename: string = 'out',
  type: string = 'application/text'
) => {
  const blob = new Blob([content], { type });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);

  link.setAttribute('download', filename);
  link.click();
};
