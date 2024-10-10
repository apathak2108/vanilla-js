// let myDiv = document.createElement('div');

// for (let i=0; i<100; i++) {
//   let para = document.createElement('p');
//   para.textContent = `Hello from Ananya for ${i}th time`;
//   myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);

const t1 = performance.now();

let myDiv = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = `This is para ${i}`;
  myDiv.appendChild(para);
}
document.body.appendChild(myDiv);

const t2 = performance.now();

console.log(`Total time taken is: ${t2 - t1}`);
