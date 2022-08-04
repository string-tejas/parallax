const { readdirSync } = require("fs");

// some automation coz me lazy
// doesn't work in react coz its client side only
const getData = (dir) => {
  const imageNames = readdirSync(dir);
  const data = [];
  imageNames.forEach((img) => {
    data.push({
      src: `${dir}/${img}`,
      alt: img.split(".")[0],
    });
  });
  return data;
};

const galleryData = getData("../public/img/Gallery");
const photosData = getData("../public/img/Photos");

console.log(galleryData);
console.log(photosData);
