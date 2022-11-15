export class bridgeLibApp {
  encodeBase(string: string) {
    return Buffer.from(string, 'base64');
  }
}
