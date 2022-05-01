export class AccessDeniedError extends Error {
  constructor() {
    super("Access denied, Invalid token");
    this.name = "AccessDeniedError";
  }
}
