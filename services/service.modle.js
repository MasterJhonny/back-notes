const puppeteer = require('puppeteer');


const username = '1757554';
const password = 'demo22fin##'


class ModleService {
    constructor(){
        
    }

    async slopes () {

        const data = []

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('http://200.7.160.155/admivirtual/my/');


        await page.type('#username', username);
        await page.type('#password', password);
        await page.click('#loginbtn');
        await page.waitForNavigation();
        // await page.waitForSelector('#block-timeline-62617da011bd462617da0048f12');

        const valores = await page.$eval('#block-timeline-62617da011bd462617da0048f12', data => data.textContent)


        console.log(valores);


        // const listPen = valores.split('\n');

        // await page.screenshot({ path: 'login.png' });

        await browser.close();

        return {
            slopes: "pendientes",
            list: valores
        }
    }
}

module.exports = ModleService;