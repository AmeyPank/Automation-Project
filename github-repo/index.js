var puppeteer = require('puppeteer');


async function extractData(){
    // Launch puppeteer
    var browser = await puppeteer.launch({ headless: false });

    // new web Page on the browser
    var page = await browser.newPage();
 
    await page.goto("https://github.com/acciojob/accio-assignment-repo-template");

    // document.querySelector("a[data-pjax='#repo-content-pjax-container").innerText
    // document.querySelector("#repo-stars-counter-star").innerText
    await page.setViewport({
        width: 1200,
        height: 1000,
        deviceScaleFactor: 1,
      });
    var repoName = await page.evaluate(function(){
        return document.querySelector("a[data-pjax='#repo-content-pjax-container").innerText;
    });
    console.log(repoName);

    var stars = await page.evaluate(function(){
        return document.querySelector("#repo-stars-counter-star").innerText;
    });
    console.log(stars);

    var forks = await page.evaluate(function(){
        return document.querySelector("#repo-network-counter").innerText;
    });
    console.log(forks);

    var watchs = await page.evaluate(function(){
        return document
        .querySelector(`a[href='/acciojob/${repoName}/watchers]' ]`)
        .querySelector("strong").innerText;
    });
    console.log(watchs);

}
extractData();