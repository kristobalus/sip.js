export function copyMessage(msg: any, deep: any): any;
export function create(options: any, callback: any): {
    send: (m: any, callback: any) => void;
    encodeFlowUri: (flow: any) => {
        schema: string;
        user: any;
        host: any;
        params: {};
    };
    decodeFlowUri: (uri: any) => {
        protocol: any;
        address: any;
        port: number;
        local: {
            address: any;
            port: number;
        };
    };
    isFlowUri: (uri: any) => boolean;
    hostname: () => any;
    destroy: () => void;
};
export function start(options: any, callback: any): void;
export function parseAOR(data: any): any;
export function parseUri(s: any): any;
export function stringifyUri(uri: any): string;
export function stringifyAOR(aor: any): string;
export function stringifyAuthHeader(a: any): string;
export function stringify(m: any): string;
export function makeResponse(rq: any, status: any, reason: any, extension: any): {
    status: any;
    reason: any;
    version: any;
    headers: {
        via: any;
        to: any;
        from: any;
        'call-id': any;
        cseq: any;
    };
};
export function makeStreamParser(onMessage: any, onFlood: any, maxBytesHeaders: any, maxContentLength: any): (data: any) => void;
declare function parseMessage(s: any): {
    headers: {};
};
export function makeTransport(options: any, callback: any): {
    open: (target: any, error: any) => any;
    get: (target: any, error: any) => any;
    send: (target: any, message: any) => void;
    destroy: () => void;
};
export function resolve(uri: any, action: any): any;
export function generateBranch(): string;
export function makeTransactionLayer(options: any, transport: any): {
    createServerTransaction: (rq: any, cn: any) => {
        send: any;
        message: any;
        shutdown: () => void;
    };
    createClientTransaction: (connection: any, rq: any, callback: any) => {
        message: any;
        shutdown: () => void;
    };
    getServer: (m: any) => any;
    getClient: (m: any) => any;
    destroy: () => void;
};
export function send(m: any, callback: any): void;
declare function destroy(): void;
export function encodeFlowUri(flow: any): {
    schema: string;
    user: any;
    host: any;
    params: {};
};
export function decodeFlowUri(uri: any): {
    protocol: any;
    address: any;
    port: number;
    local: {
        address: any;
        port: number;
    };
};
export function isFlowUri(uri: any): boolean;
export function hostname(): any;
export { parseMessage as parse, destroy as stop };
//# sourceMappingURL=sip.d.ts.map