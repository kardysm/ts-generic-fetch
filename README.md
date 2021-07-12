# ts-generic-fetch

Fetch extended with generic type

## Install

```
yarn add --dev ts-generic-fetch
// or
npm install --save-dev ts-generic-fetch
```

## Use

In an entrypoint of your app:
```
import 'ts-generic-fetch'
```

Wherever you need fetch in your files:

```
  const jsonResult = fetch<{returnTypeProp: 'someValue'}>('https://use-fetch-as-usual')
  const textResult = fetch<'expectedString'>('https://use-fetch-as-usual')
```

* * *
## The code 

Whole package is just shart snippet which enhances built-in typings. 

You could either: 
- use the snippet if you don't want external deps or 
- install npm package [ts-generic-fetch](https://www.npmjs.com/package/ts-generic-fetch)

```
export {}

declare global {
  interface TypedResponse<ReturnData> extends Response {
    json() : ReturnData extends {} ? Promise<ReturnData> : ReturnType<Response["json"]>
    text() : ReturnData extends string ? Promise<ReturnData> : ReturnType<Response["text"]>
  }
  function fetch<T>(input: RequestInfo, init?: RequestInit): Promise<TypedResponse<T>>;
}
```
