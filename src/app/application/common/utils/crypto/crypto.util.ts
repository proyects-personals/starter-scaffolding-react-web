import {
  AES_GCM_ALGORITHM,
  AES_GCM_IV_LENGTH,
  HEX_BYTE_LENGTH,
  HEX_RADIX,
  RAW_KEY_FORMAT,
  SHA_256_ALGORITHM,
} from "@domain";

/**
 * @description Convierte una cadena en bytes compatibles con Web Crypto.
 *
 * @param {string} value Valor a convertir
 * @returns {Uint8Array<ArrayBuffer>} Bytes del valor
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function encode(value: string): Uint8Array<ArrayBuffer> {
  const encodedValue = new TextEncoder().encode(value);
  const buffer = new ArrayBuffer(encodedValue.byteLength);

  new Uint8Array(buffer).set(encodedValue);

  return new Uint8Array(buffer);
}

/**
 * @description Convierte bytes a una cadena hexadecimal.
 *
 * @param {Uint8Array<ArrayBuffer>} bytes Bytes a convertir
 * @returns {string} Representación hexadecimal
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function toHex(bytes: Uint8Array<ArrayBuffer>): string {
  return Array.from(bytes)
    .map((byte: number): string =>
      byte.toString(HEX_RADIX).padStart(HEX_BYTE_LENGTH, "0"),
    )
    .join("");
}

/**
 * @description Convierte una cadena hexadecimal a bytes.
 *
 * @param {string} hex Valor hexadecimal
 * @returns {Uint8Array<ArrayBuffer>} Bytes
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
function fromHex(hex: string): Uint8Array<ArrayBuffer> {
  const buffer = new ArrayBuffer(hex.length / HEX_BYTE_LENGTH);
  const bytes = new Uint8Array(buffer);

  for (let index = 0; index < hex.length; index += HEX_BYTE_LENGTH) {
    bytes[index / HEX_BYTE_LENGTH] = Number.parseInt(
      hex.slice(index, index + HEX_BYTE_LENGTH),
      HEX_RADIX,
    );
  }

  return bytes;
}

/**
 * @description Genera una clave AES-GCM a partir de una clave base.
 *
 * @param {string} encryptionKey Clave base de cifrado
 * @returns {Promise<CryptoKey>} Clave criptográfica
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
async function getEncryptionKey(encryptionKey: string): Promise<CryptoKey> {
  const keyMaterial = await crypto.subtle.digest(
    SHA_256_ALGORITHM,
    encode(encryptionKey),
  );

  return crypto.subtle.importKey(
    RAW_KEY_FORMAT,
    keyMaterial,
    {
      name: AES_GCM_ALGORITHM,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

/**
 * @description Cifra una cadena utilizando AES-GCM.
 *
 * @param {string} value Valor a cifrar
 * @param {string} encryptionKey Clave base de cifrado
 * @returns {Promise<string>} Valor cifrado
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function encrypt(
  value: string,
  encryptionKey: string,
): Promise<string> {
  const key = await getEncryptionKey(encryptionKey);

  const initializationVector = crypto.getRandomValues(
    new Uint8Array(AES_GCM_IV_LENGTH),
  );

  const encryptedValue = await crypto.subtle.encrypt(
    {
      name: AES_GCM_ALGORITHM,
      iv: initializationVector,
    },
    key,
    encode(value),
  );

  return `${toHex(initializationVector)}:${toHex(
    new Uint8Array(encryptedValue),
  )}`;
}

/**
 * @description Descifra una cadena previamente cifrada con AES-GCM.
 *
 * @param {string} value Valor cifrado
 * @param {string} encryptionKey Clave base de cifrado
 * @returns {Promise<string | null>} Valor descifrado o null
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export async function decrypt(
  value: string,
  encryptionKey: string,
): Promise<string | null> {
  try {
    const parts = value.split(":");

    if (parts.length !== HEX_BYTE_LENGTH) {
      return null;
    }

    const [ivHex, encryptedHex] = parts;

    if (ivHex.length === 0 || encryptedHex.length === 0) {
      return null;
    }

    const key = await getEncryptionKey(encryptionKey);

    const initializationVector = fromHex(ivHex);
    const encryptedValue = fromHex(encryptedHex);

    const decryptedValue = await crypto.subtle.decrypt(
      {
        name: AES_GCM_ALGORITHM,
        iv: initializationVector,
      },
      key,
      encryptedValue,
    );

    return new TextDecoder().decode(decryptedValue);
  } catch {
    return null;
  }
}
