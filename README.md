# Headless components for React

[![npm version](https://img.shields.io/npm/v/@nexys/headless)](https://www.npmjs.com/package/@nexys/headless)
[![Publish](https://github.com/nexys-system/react-headless/actions/workflows/publish.yml/badge.svg)](https://github.com/nexys-system/react-headless/actions/workflows/publish.yml)
[![Deployment](https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml/badge.svg)](https://github.com/nexys-system/react-headless/actions/workflows/deploy.yml)

React headless components - Quickly build robust react apps

- no UI dependencies
- Minimal bootstrap implementation
- Typescript, all props typed

## Get started

`yarn add @nexys/react-headless`

## UI Components

All components fitting [`ui-type.ts`](https://github.com/nexys-system/react-headless/blob/master/src/lib/list/ui-type.ts) must be created for a particular design system.

Then instantiate [`list-super`](https://github.com/nexys-system/react-headless/blob/master/src/lib/list/list-super.tsx) with the created UI components

see example [here](https://github.com/nexys-system/react-headless/commit/6e7df1eadab7ca14b99118a6a27dbb34c4eb859f#diff-25a6634263c1b1f6fc4697a04e2b9904ea4b042a89af59dc93ec1f5d44848a26)

## Requests

Create a request function that extends https://github.com/nexys-system/react-headless/blob/master/src/lib/request/fetch.ts#L4

below an untested implementation example:

```
const request = <A, B = any>(
  url: string,
  method:Method = "GET",
  data?: B
): Promise<A> => {
  try {
    return fetchJSON(url, {method, data});
  } catch (err) {
    if(err.message) {
      throw Error(err)
    }
    const {status, data}:{status:number, data?:any} = err;
    
    if (status === 401) {
      // user unauthenticated, redirect to login?
    }
    
    if (status === 403) {
      // not enough permissions, display toast
    }
    
    if (status === 500) {
      // todo
    }
    
    if (status === 400) {
      return Promise.reject(data)
    }
  }
}
```

## Associated Resources

- [React I18n](https://github.com/nexys-system/react-i18n)

## Old versions

- [Material list](https://nexys-system.github.io/mui-list-ts/)
- [React Material Components](https://github.com/nexys-system/react-material-component)
- [React bootstrap](https://github.com/nexys-system/react-bootstrap-components)
- [Tailwind React UI](https://github.com/nexys-system/tailwind-react-ui)
- [React Stateful](https://github.com/nexys-system/react-stateful)
