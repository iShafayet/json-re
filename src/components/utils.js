function toPascalCase(string) {
  return `${string}`
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w+)/, "g"),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, "g"), "")
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

function toCamelCase(string) {
  string = toPascalCase(string);
  if (string.length === 0) return string;
  string = string[0].toLowerCase() + string.substring(1);
  return string;
}

function toSnakeCase(inputString) {
  inputString = toCamelCase(inputString);
  return inputString
    .split("")
    .map(character => {
      if (character == character.toUpperCase()) {
        return "_" + character.toLowerCase();
      } else {
        return character;
      }
    })
    .join("");
}

export { toPascalCase, toCamelCase, toSnakeCase };
