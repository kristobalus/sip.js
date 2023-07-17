export function challenge(ctx: any, rs: any): any;
export function authenticateRequest(ctx: any, rq: any, creds: any): boolean;
export function signResponse(ctx: any, rs: any): any;
export function signRequest(ctx: any, rq: any, rs: any, creds: any): any;
export function authenticateResponse(ctx: any, rs: any): boolean;
export function kd(...args: any[]): string;
export function calculateUserRealmPasswordHash(user: any, realm: any, password: any): string;
export function calculateHA1(ctx: any): any;
export function calculateDigest(ctx: any): string;
export function generateNonce(tag: any, timestamp: any): any;
export function extractNonceTimestamp(nonce: any, tag: any): Date;
//# sourceMappingURL=digest.d.ts.map