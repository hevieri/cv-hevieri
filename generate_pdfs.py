from playwright.sync_api import sync_playwright
import os

base = os.path.dirname(os.path.abspath(__file__))
pdfs = [
    ("cv-general.html", "cv-general.pdf"),
    ("cv-general-ats.html", "cv-general-ats.pdf"),
    ("cv-qa.html", "cv-qa.pdf"),
    ("cv-qa-ats.html", "cv-qa-ats.pdf"),
    ("cv-frontend.html", "cv-frontend.pdf"),
    ("cv-frontend-ats.html", "cv-frontend-ats.pdf"),
]

COMPACT_CSS = """
@page { margin: 0 !important; }
body { font-size: 10px !important; line-height: 1.3 !important; }
h1 { font-size: 18px !important; }
h4 { font-size: 11px !important; }
h5 { font-size: 10px !important; }
p { font-size: 9.5px !important; margin-bottom: 1px !important; }
.exp-item { margin-bottom: 4px !important; }
.edu-item { margin-bottom: 2px !important; }
.sec-title { margin-bottom: 3px !important; margin-top: 5px !important; }
.skills-list { font-size: 9px !important; }
"""

with sync_playwright() as p:
    browser = p.chromium.launch()
    for html_file, pdf_file in pdfs:
        page = browser.new_page()
        page.goto("file:///" + os.path.join(base, html_file).replace("\\", "/"))
        page.wait_for_timeout(500)
        page.add_style_tag(content=COMPACT_CSS)
        page.wait_for_timeout(200)
        page.pdf(
            path=os.path.join(base, pdf_file),
            format="A4",
            print_background=True,
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"},
        )
        page.close()
        print(f"Generated {pdf_file}")
    browser.close()
    print("All done")
