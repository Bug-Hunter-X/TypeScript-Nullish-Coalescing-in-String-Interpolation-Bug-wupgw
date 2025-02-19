function printName(name: string | null): void {
  console.log(`My name is ${name ?? 'Unknown'}`);
}

printName(null); // This will now print 'My name is Unknown'

function printName2(name: string | null): void {
  console.log(`My name is ${name?.toString()}`);
}

printName2(null); //This will print 'My name is undefined'