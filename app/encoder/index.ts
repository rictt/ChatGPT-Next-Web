const { encode, decode } = require('./encoder.js')

export const encodeCount = (str: string) => {
  const encoded: any[] = encode(str)
  return encoded.length
}

export {
  encode,
  decode
}