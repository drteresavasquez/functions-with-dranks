import { getRandomDrank } from "../helpers/data/dranksData.js";
import { drankDom } from "./drankDom.js";

const randomDrankDom = () => {
  $("#app").html("");
  drankDom(getRandomDrank());
};

export { randomDrankDom };
