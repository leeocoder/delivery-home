export class UsernameAlreadyInUse extends Error {
  constructor() {
    super("Username already in use, please choose another one!");
    this.name = "UsernameAlreadyInUse";
  }
}
