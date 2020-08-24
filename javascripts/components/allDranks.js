import { getAllDranks, getDrankTypes } from "../helpers/data/dranksData.js";
import { drankDom } from "./drankDom.js";
import { drankButtons } from "./shared/drankButtons.js";

const allDranks = () => {
  drankButtons();
  $("#app").html("");
  Object.keys(getAllDranks()).forEach((drank, i) => {
    getDrankTypes(drank).forEach((item) => {
      drankDom(item);
    });
  });
};

export { allDranks };
