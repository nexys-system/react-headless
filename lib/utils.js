export const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));
export const saveByteArray = (content, filename = "out", type = "application/text") => {
  const blob = new Blob([content], {type});
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  link.click();
};
