import { concatanation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatanation(input.value, "hello!");
    });
}
//# sourceMappingURL=index.js.map