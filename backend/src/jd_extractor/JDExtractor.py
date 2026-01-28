from .Scraper import scrapeURL
from .Cleaner import extractText
from .Summarizer import summarize


async def extractJobDescription (url):
    try:
        print(url, url.startswith("http"))
        # check URL Correctness
        if not url.startswith("http"):
            raise ValueError("Invalid URL")
        html = await scrapeURL(url)
        print(html)
        # Clean Up Text and extract content
        extractedContent = extractText(html)
        # labels = extractLabels(html) 

        return await summarize(extractedContent)
    except Exception as e:
        print("Exception thrown", e)
        return ""
