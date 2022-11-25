// this is a wrapper around fetch to get JSONs
// see https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
export type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const fetchJSON = async <A = any, B = any>(
  url: string,
  { method = "GET", data }: { method: Method; data?: B }
): Promise<A> => {
  const body: string | undefined = data && JSON.stringify(data);

  const headers = { "content-type": "application/json" };
  const credentials = "same-origin";

  const options: RequestInit = { method, body, headers, credentials };

  const response = await fetch(url, options);

  const { status } = response;

  if (status === 500) {
    return Promise.reject({ status });
  }

  try {
    const responseJson = await response.json();

    if (status === 200 || status === 201) {
      return responseJson;
    }

    return Promise.reject({ status, data: responseJson });
  } catch (err) {
    throw Error("could not parse response to json");
  }
};

export const get = <A>(url: string): Promise<A> =>
  fetchJSON<A>(url, { method: "GET" });

export const post = <A, B = any>(url: string, data: B): Promise<A> =>
  fetchJSON<A, B>(url, { method: "POST", data });

export default fetchJSON;
