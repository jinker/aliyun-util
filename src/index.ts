import * as crypto from 'crypto-js';
import { Base64 } from 'js-base64';

export function getUserName(ak: string, userId: number): string {
  return Base64.encode(`0:${userId}:${ak}`);
}

export function getPassword(sk: string): string {
  const timestamp = Date.now() + '';
  const hmacSha1Str = crypto.HmacSHA1(sk, timestamp).toString().toUpperCase();
  return Base64.encode(`${hmacSha1Str}:${timestamp}`);
}
