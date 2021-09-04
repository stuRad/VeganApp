

const AnimalChoices = {
  COW: "https://artprojectsforkids.org/wp-content/uploads/2021/01/Cow.jpeg",
  SHEEP: "https://i.guim.co.uk/img/media/22bed68981e92d7a9ff204ed7d7f5776a16468fe/1933_1513_3623_2173/master/3623.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=faa14987959780c89dd773416129867b",
  PIG: "http://modernfarmer.com/wp-content/uploads/2014/03/smart_pig.jpg"
}

function serveAnimal() {
    const i = Math.floor(Math.random() * 3);

    switch(i) {
      case 0:
        return({
          url: AnimalChoices.COW,
          name: "Cow",
          description: "Gentle giant"
        });
        break;
      case 1:
        return({
          url: AnimalChoices.SHEEP,
          name: "Sheep",
          description: "Fluffy"
        });
        break;
      case 2:
        return({
          url: AnimalChoices.PIG,
          name: "Pig",
          description: "Surprisingly cute"
        });
        break;
    }
}

//serveAnimal();

module.exports = {serveAnimal};
//export {serveAnimal};
