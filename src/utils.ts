import nacl from "https://cdn.skypack.dev/tweetnacl@v1.0.3?dts";

export const verifySignature = (
    publicKey: string,
    signature: string,
    timestamp: string,
    rawBody: string
): boolean => {
    return nacl.sign.detached.verify(
      new TextEncoder().encode(timestamp + rawBody),
      hexToUint8Array(signature),
      hexToUint8Array(publicKey),
    );
};

/** Converts a hexadecimal string to Uint8Array. */
function hexToUint8Array(hex: string) {
  return new Uint8Array(hex.match(/.{1,2}/g)!.map((val) => parseInt(val, 16)));
}
