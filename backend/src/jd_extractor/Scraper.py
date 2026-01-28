from playwright.async_api import async_playwright, Playwright

async def scrapeURL(url: str) -> str:
    try:
        async with async_playwright() as p:
            browser = await p.chromium.launch(
                headless=True,
                args=["--no-sandbox"]
            )
            page = await browser.new_page()
            await page.goto(url, wait_until="networkidle", timeout=30_000)
            html = await page.content()
            await browser.close()
            return html
    except Exception as e:
        print(e)
        return ""
    
