from playwright.sync_api import sync_playwright
import os
base = r'D:\hevieri\00-Dev\00-Github\repos\cv'
CSS = '@page { margin: 0 !important; } body { font-size: 10px !important; line-height: 1.3 !important; } h1 { font-size: 18px !important; } h4 { font-size: 11px !important; } h5 { font-size: 10px !important; } p { font-size: 9.5px !important; margin-bottom: 1px !important; } .exp-item { margin-bottom: 4px !important; } .edu-item { margin-bottom: 2px !important; } .sec-title { margin-bottom: 3px !important; margin-top: 5px !important; }'
with sync_playwright() as p:
    browser = p.chromium.launch()
    for f in ['cv-general.html','cv-qa.html','cv-frontend.html','cv-general-ats.html','cv-qa-ats.html','cv-frontend-ats.html']:
        page = browser.new_page()
        page.goto('file:///' + os.path.join(base, f).replace(os.sep, '/'))
        page.wait_for_timeout(500)
        page.add_style_tag(content=CSS)
        page.wait_for_timeout(200)
        h = page.evaluate('document.querySelector(".page").scrollHeight')
        a4 = 297*96/25.4
        print(f'{f}: {h}px / {a4:.0f}px — margin: {a4-h:.0f}px')
        page.close()
    browser.close()
