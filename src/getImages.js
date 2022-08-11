const { readdirSync } = require("fs");

// some automation coz me lazy
// doesn't work in react coz react works on client side only
// and this code is for server side image names in json array conversion
const getData = (dir) => {
  const imageNames = readdirSync(dir);
  const data = [];
  const relativeDir = dir.substring(9);
  imageNames.forEach((img) => {
    data.push({
      src: `${relativeDir}/${img}`,
      alt: img.split(".")[0],
    });
  });
  return data;
};

const galleryData = getData("../public/img/Gallery");
const photosData = getData("../public/img/Photos");

console.log(galleryData);
console.log(photosData);
