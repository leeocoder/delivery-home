export class UnauthorizedError extends Error {
  constructor() {
    super(`Username or password invalid!`);
  }
}
