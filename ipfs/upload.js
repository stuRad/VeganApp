const {create} = require("ipfs-http-client");
const {serveAnimal} = require("./animals.js");

async function uploader() {
  const ipfs = create("https://ipfs.infura.io:5001");
  const animal = serveAnimal();
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: animal.name,
      image: animal.url,
      description: animal.description
    })
  }];

  const result = await ipfs.add(files);

  //console.log(result);
  return result;
}

module.exports = {uploader};
