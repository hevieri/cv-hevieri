from playwright.sync_api import sync_playwright
import os

base = os.path.dirname(os.path.abspath(__file__))
with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto("file:///" + os.path.join(base, "cv-general.html").replace("\\", "/"))
    page.wait_for_timeout(500)
    page.add_style_tag(content="""
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
    """)
    page.wait_for_timeout(200)
    height = page.evaluate('document.querySelector(".page").scrollHeight')
    a4 = 297 * 96 / 25.4
    print(f"Content height: {height}px (A4={a4:.0f}px at 96dpi)")
    if height > a4:
        print(f"OVERFLOW by {height - a4:.0f}px")
    else:
        print(f"FITS with {a4 - height:.0f}px margin")
    browser.close()
