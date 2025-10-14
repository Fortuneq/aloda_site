#!/usr/bin/env python3
import re
import sys
import os

def clean_webflow_html(html_content, page_type="index"):
    """
    Clean Webflow-specific attributes and elements from HTML content
    """
    
    # Remove Webflow saved comment
    html_content = re.sub(r'<!-- saved from url=.*?-->', '', html_content)
    
    # Remove Webflow data attributes from HTML tag
    html_content = re.sub(r'data-wf-[^=]*="[^"]*"', '', html_content)
    html_content = re.sub(r'data-w-id="[^"]*"', '', html_content)
    
    # Remove Webflow class names that contain webflow-specific markers
    html_content = re.sub(r'wf-[a-zA-Z0-9-]*', '', html_content)
    html_content = re.sub(r'w-mod-[a-zA-Z0-9-]*', '', html_content)
    html_content = re.sub(r'w-nav-[a-zA-Z0-9-]*', '', html_content)
    html_content = re.sub(r'w-icon-[a-zA-Z0-9-]*', '', html_content)
    html_content = re.sub(r'w-inline-block', '', html_content)
    html_content = re.sub(r'w--current', '', html_content)
    
    # Remove Webflow generator meta tag
    html_content = re.sub(r'<meta content="Webflow" name="generator"[^>]*>', '', html_content)
    
    # Remove Webflow currency settings script
    html_content = re.sub(r'<script type="text/javascript">window\.__WEBFLOW_CURRENCY_SETTINGS.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Remove Webflow scripts
    html_content = re.sub(r'<script[^>]*webflow[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Remove Webflow badge elements
    html_content = re.sub(r'<[^>]*webflow-badge[^>]*>', '', html_content)
    
    # Update asset paths to relative paths
    html_content = re.sub(r'ALODA[^/]*/([^"]*)', r'images/\1', html_content)
    
    # Update CSS links
    html_content = re.sub(r'href="[^"]*aloda\.webflow\.shared[^"]*\.css"', 'href="css/main.css"', html_content)
    
    # Update JS scripts
    html_content = re.sub(r'src="[^"]*jquery[^"]*\.js"', 'src="js/jquery.min.js"', html_content)
    html_content = re.sub(r'src="[^"]*webfont\.js"', 'src="js/webfont.js"', html_content)
    
    # Remove external CDN links for favicons (keep them pointing to external URLs or update to local paths)
    html_content = re.sub(r'href="https://cdn\.prod\.website-files\.com/[^"]*"', 'href="images/favicon.png"', html_content)
    
    # Update navigation links to relative paths
    if page_type == "index":
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    elif page_type == "about":
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="../index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="../services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="../cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    else:
        # For services and cases pages
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="../index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="../about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    
    # Clean up multiple spaces and empty attributes
    html_content = re.sub(r'\s+', ' ', html_content)
    html_content = re.sub(r'class=""', '', html_content)
    html_content = re.sub(r'class=" "', '', html_content)
    html_content = re.sub(r'class="  *"', '', html_content)
    
    return html_content

def process_file(input_file, output_file, page_type):
    """Process a single HTML file"""
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    cleaned_content = clean_webflow_html(content, page_type)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)

if __name__ == "__main__":
    base_dir = "/Users/volkovvladislav/GolandProjects/aloda_site"
    
    # File mappings
    files_to_process = [
        (f"{base_dir}/mainpage/ALODA _ Агенство по интеграции кастомных ИИ-решений.html", 
         f"{base_dir}/standalone_site/index.html", "index"),
        (f"{base_dir}/about/ALODA _ Агенство по интеграции кастомных ИИ-решений.html", 
         f"{base_dir}/standalone_site/about.html", "about"),
        (f"{base_dir}/services/ALODA _ Агенство по интеграции кастомных ИИ-решений _ Услуги.html", 
         f"{base_dir}/standalone_site/services.html", "services"),
        (f"{base_dir}/our_cases/ALODA _ Агенство по интеграции кастомных ИИ-решений _ Наши кейсы.html", 
         f"{base_dir}/standalone_site/cases.html", "cases")
    ]
    
    for input_file, output_file, page_type in files_to_process:
        if os.path.exists(input_file):
            print(f"Processing {page_type}: {os.path.basename(input_file)} -> {os.path.basename(output_file)}")
            process_file(input_file, output_file, page_type)
        else:
            print(f"Warning: File not found: {input_file}")
    
    print("HTML cleaning completed!")