const drankItDom = (object) => {
  $("#app").append(`
      <div class="col-6">
          <img src="${object.image}" alt="${object.name}" style="width: 100%;" />
      </div>
      <div class="col-6" id="slow-steps">
      </div>
    `);

  slowSteps(object);
};

const slowSteps = (object) => {
  setTimeout(() => stepOne(object), 2000);
  setTimeout(() => stepTwo(object), 4000);
  setTimeout(() => stepThree(object), 6000);
  setTimeout(stepFour, 8000);
};

const stepOne = (object) => {
  return $("#slow-steps").append(
    `<h2>Step 1:</h2><h4>Get a ${object.glass}</h4><hr />`
  );
};
const stepTwo = (object) => {
  return $("#slow-steps").append(
    `<h2>Step 2:</h2><h4>Pour the ${object.name}</h4><hr />`
  );
};
const stepThree = (object) => {
  return $("#slow-steps").append(
    `<h2>Step 3:</h2><h4>Drank the ${object.name}</h4><hr />`
  );
};
const stepFour = () => {
  return $("#slow-steps").append(
    `<h2>Step 4: PARTAYYYY</h2>
    <img src="./../assets/images/partay.gif" alt="partay" />`
  );
};

export { drankItDom };
