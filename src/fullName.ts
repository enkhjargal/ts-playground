export class FullName {
  private readonly fullName: string;

  private constructor(first_name: string, last_name: string) {
    this.fullName = `${first_name} ${last_name}`;
  }

  toString(): string {
    return this.fullName;
  }
}