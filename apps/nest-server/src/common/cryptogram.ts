import * as crypto from "crypto";

/**
 * make salt
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString("base64");
}

/**
 * Encrypt password
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return "";
  }
  const tempSalt = Buffer.from(salt, "base64");
  return (
    // 10000 代表迭代次数 16代表长度
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, "sha1").toString("base64")
  );
}
