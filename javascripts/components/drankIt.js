import { drankItDom } from "./drankItDom.js";

const drankIt = (object) => {
  $("#app").html("");
  drankItDom(object);
};

export { drankIt };
