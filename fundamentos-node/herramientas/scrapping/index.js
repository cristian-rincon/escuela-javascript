const puppeteer = require("puppeteer");

(async () => {
  console.log("Lanzando navegador chromium");
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false});

  const page = await browser.newPage()
  await page.goto('https://crincon.herokuapp.com')

  var titulo1 = await page.evaluate(() => {
    const h2 = document.querySelectorAll('h2');
    console.log(h2.innerHTML);

    return h2.innerHTML;
  })
   
  console.log(titulo1);
  

  //console.log("Cerrando navegador chromium");
  browser.close();
  //console.log("Navegador cerrado");
})();
