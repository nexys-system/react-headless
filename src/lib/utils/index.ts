import * as RegExpUtils from './regexp';

export const delay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * puts content into a file that is being downloaded
 * @param reportName https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript
 * @see fileName: filename of out
 * @param byte
 * @param type
 */
export const saveByteArray = (
  content: any | string, // Buffer
  filename: string = "out",
  type: string = "application/text"
) => {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  link.setAttribute("download", filename);
  link.click();
};

export const yesOrNo = (
  d?: boolean,
  labels: { yes: string; no: string; notBoolean: string } = {
    yes: "yes",
    no: "no",
    notBoolean: "-",
  }
): string => {
  if (typeof d !== "boolean") {
    return labels.notBoolean;
  }

  if (d === true) {
    return labels.yes;
  }

  return labels.no;
};

/**
 * parse JWT
 * @param token
 * @see https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
 * @returns
 */
export const parseJwt = <A = any>(token: string): A => {
  const base64Url: string = token.split(".")[1];
  const base64: string = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload: string = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const getAnalyticsReadyPath = (
  href: string,
  prefix: string | RegExp =  new RegExp('^http[s]{0,1}://[a-z]+[\\.]{0,1}[a-zA-Z]+\\.[a-zA-Z]+')
) => {
  //const { href } = window.location;

  // remove prefix
  href = href.replace(prefix, '');

  const foundUuids = href.match(new RegExp('/' + RegExpUtils.matchUuid + '/', 'g'));

  if (foundUuids && Array.isArray(foundUuids)) {
    foundUuids.forEach((uuid) => {
      href = href.replace(uuid, '/:uuid/');
    });
  }

  const foundIds = href.match(/\/\d+\//);

  if (foundIds && Array.isArray(foundIds)) {
    foundIds.forEach((id) => {
      href = href.replace(id, '/:id/');
    });
  }

  return href;
};

