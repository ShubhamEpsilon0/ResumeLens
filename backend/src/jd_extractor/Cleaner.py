import trafilatura
# from bs4 import BeautifulSoup
import re

def extractText(html: str) -> str:
    text = trafilatura.extract(html, 
                               include_comments=False,
                               include_tables=True,        # IMPORTANT for structured fields
                               include_formatting=True,    # preserves labels
                               favor_recall=True,          # keeps more content
                               deduplicate=False
                            )
    # print(text)
    if not text:
        raise RuntimeError("Failed to extract main content")
    return text


# def extractLabels (html):
#     soup = BeautifulSoup(html, "lxml")

#     candidates = []

#     for block in soup.find_all(text=True):
#         text = block.strip()
#         if not text:
#             continue

#         # Capture short labels
#         if 1 <= len(text.split()) <= 6 and ":" not in text:
#             next_node = block.find_next(string=True)
#             if next_node:
#                 value = next_node.strip()
#                 candidates.append((text, value))

#     metadata = {}
#     print(candidates)

#     for label, value in candidates:
#         # ID-like
#         if re.fullmatch(r"[A-Z]{0,3}\d{4,}", value):
#             metadata.setdefault("ids", []).append({
#                 "label": label,
#                 "value": value
#             })

#         # Date-like
#         elif re.search(r"\d{1,2}[/-]\d{1,2}[/-]\d{2,4}", value):
#             metadata.setdefault("dates", []).append({
#                 "label": label,
#                 "value": value
#             })

#         # Experience
#         elif re.search(r"\d+\s*(to|-)\s*\d+\+?\s*years?", value, re.I):
#             metadata["experience"] = value

#     return metadata

