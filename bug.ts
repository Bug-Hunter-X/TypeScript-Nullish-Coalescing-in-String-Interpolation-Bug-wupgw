function printName(name: string | null): void {
  console.log(`My name is ${name}`);
}

printName(null); // This will cause a bug