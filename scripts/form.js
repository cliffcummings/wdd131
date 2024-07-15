// console.log("*** Reading form.js - TODO DEBUG ***");
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
    //   avg-rating: 4.5  :: Assignment typo
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// console.log("*** Reading form.js #2 - TODO DEBUG ***");


products.forEach(product => {
  const productHTML = document.createElement("option");
  productHTML.setAttribute("value", `${product.name}`);
  // console.log(product.name);
  productHTML.innerHTML = product.name;
  // console.log(productHTML);
  document.getElementById("prodName").appendChild(productHTML);
});