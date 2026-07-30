from playwright.sync_api import sync_playwright
import os
base = r'D:\hevieri\00-Dev\00-Github\repos\cv'
for f in ['cv-general-ats.html','cv-qa-ats.html','cv-frontend-ats.html']:
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto('file:///' + os.path.join(base, f).replace(os.sep, '/'))
        page.wait_for_timeout(500)
        h = page.evaluate('document.querySelector(".page").scrollHeight')
        a4 = 297*96/25.4
        print(f'{f}: {h}px / {a4:.0f}px — margin: {a4-h:.0f}px')
        browser.close()
