export {}

declare global {
  interface TypedResponse<ReturnData> extends Response {
    json() : ReturnData extends {} ? Promise<ReturnData> : ReturnType<Response["json"]>
    text() : ReturnData extends string ? Promise<ReturnData> : ReturnType<Response["text"]>
  }
  function fetch<T>(input: RequestInfo, init?: RequestInit): Promise<TypedResponse<T>>;
}
