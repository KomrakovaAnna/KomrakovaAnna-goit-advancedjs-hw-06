let some: unknown;
some = "Text";
let str: string;

if (typeof some === "string") {
  str = some;
} else {
  throw new Error("Expected a string value");
}
export {};
