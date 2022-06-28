const puppeteer = require('puppeteer');

(async () => {
    //Creates a Headless Browser Instance in the Background
    const browser = await puppeteer.launch();

    //Creates a Page Instance, similar to creating a new Tab
    const page = await browser.newPage();

    //Navigate the page to url
    await page.goto('https://www.npmjs.com/package/react-split');
    await page.pdf({path:"file.pdf",format:"A2"})

    


    await browser.close();
})();
