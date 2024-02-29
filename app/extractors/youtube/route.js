import puppeteer from "puppeteer";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  try {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page = await browser.newPage();
    await page.goto(url);

    const links = await page.evaluate(() => {
      const linkList = document.querySelectorAll("#content");
      return Array.from(linkList).map((link) => {
        const videoTitle = link.querySelector("h3").getAttribute('aria-label')
        const videoLink = link.querySelector("#video-title").getAttribute("href");

        return { videoTitle, videoLink };
      });
    });

    console.log(links);
    await browser.close();
    return NextResponse.json({
      data: links,
    });
  } catch ( err ) {
    console.log( err );
    return NextResponse.json({
      err,
    });
  }
}
