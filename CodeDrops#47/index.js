const puppeteer = require('puppeteer');
const fs = require('fs');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.com/rsanttos89');

  // Toda ssa função será executada no browser
  const imgList = await page.evaluate(() => {
    // Vamos pegar todas as imagens que estão na parte de post
    const nodeList = document.querySelectorAll('article img');

    // Transformar o NodeList em array
    const imgArray = [...nodeList]

    // Transformar os nodes (elementos html) em objetos JS
    const imgList = imgArray.map( ({src}) => ({src}));

    // Colocar para fora da função
    return imgList;
  });
 
  // Escrever os dados em um arquivo local (json)
  fs.writeFile('instagram.json', JSON.stringify(imgList, null, 2), err => {
    if(err) throw new Error('something went wrong');
    
    console.log('well done!');
  });

  await browser.close();
})();