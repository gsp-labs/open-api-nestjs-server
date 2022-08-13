# Using AppClient

> Create the client instance with server and authentication details
```typescript
const appClient = new AppClient({
    BASE: 'http://server-host.com',
    TOKEN: '1234',
});
```

> AppClient can be configured using OpenApiConfig
```typescript
type OpenAPIConfig = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    CREDENTIALS: 'include' | 'omit' | 'same-origin';
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
    ENCODE_PATH?: (path: string) => string;
}
```
Use the client instance `appClient.default` to make the API call.
