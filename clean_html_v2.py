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
    
    # Remove Webflow data attributes from HTML tag and all elements
    html_content = re.sub(r'\s*data-wf-[^=]*="[^"]*"', '', html_content)
    html_content = re.sub(r'\s*data-w-id="[^"]*"', '', html_content)
    
    # Remove Webflow generator meta tag
    html_content = re.sub(r'<meta content="Webflow" name="generator"[^>]*>', '', html_content)
    
    # Remove Webflow currency settings script
    html_content = re.sub(r'<script type="text/javascript">window\.__WEBFLOW_CURRENCY_SETTINGS.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Remove Webflow scripts but keep jQuery
    html_content = re.sub(r'<script[^>]*webflow[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Remove Webflow badge elements by removing elements with webflow-badge in src
    html_content = re.sub(r'<[^>]*webflow-badge[^>]*/?>', '', html_content)
    
    # Update asset paths to relative paths - be more specific
    # Update local file references
    html_content = re.sub(r'ALODA[^/]*/_files/([^"]*)', r'images/\1', html_content)
    
    # Update CSS links - fix the CSS reference
    html_content = re.sub(r'href="[^"]*aloda\.webflow\.shared[^"]*\.css"', 'href="css/main.css"', html_content)
    
    # Update JS scripts
    html_content = re.sub(r'src="[^"]*jquery[^"]*\.js"', 'src="js/jquery.min.js"', html_content)
    html_content = re.sub(r'src="[^"]*webfont\.js"', 'src="js/webfont.js"', html_content)
    
    # Remove external CDN links for favicons
    html_content = re.sub(r'href="https://cdn\.prod\.website-files\.com/[^"]*"', 'href="images/favicon.png"', html_content)
    
    # Update navigation links to relative paths
    if page_type == "index":
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    elif page_type == "about":
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    else:
        # For services and cases pages
        html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="index.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
        html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    
    # Clean up Webflow class names more carefully
    # Remove specific Webflow classes while preserving others
    webflow_classes = [
        r'w-mod-[a-zA-Z0-9-]*',
        r'w-nav-[a-zA-Z0-9-]*', 
        r'w-icon-[a-zA-Z0-9-]*',
        r'w-inline-block',
        r'w--current',
        r'w-dyn-[a-zA-Z0-9-]*',
        r'w-condition-[a-zA-Z0-9-]*',
        r'w-layout-[a-zA-Z0-9-]*',
        r'w-container'
    ]
    
    # Remove these classes from class attributes
    for class_pattern in webflow_classes:
        html_content = re.sub(rf'\bclass="([^"]*\s)?{class_pattern}(\s[^"]*)?"', 
                            lambda m: f'class="{m.group(1) or ""}{m.group(2) or ""}"'.strip().replace('class=""', ''),
                            html_content)
        html_content = re.sub(rf'\bclass="([^"]*\s){class_pattern}(\s[^"]*)?"', 
                            lambda m: f'class="{m.group(1).strip()}{" " + m.group(2).strip() if m.group(2) and m.group(2).strip() else ""}"',
                            html_content)
    
    # Clean up empty class attributes and fix spacing
    html_content = re.sub(r'class=""', '', html_content)
    html_content = re.sub(r'class=" +"', '', html_content)
    html_content = re.sub(r'\s+class=""', '', html_content)
    html_content = re.sub(r'\s+', ' ', html_content)
    
    # Fix malformed elements and attributes
    html_content = re.sub(r'aria-controls=""', '', html_content)
    html_content = re.sub(r'id=""', '', html_content)
    
    return html_content

def process_file(input_file, output_file, page_type):
    """Process a single HTML file"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        cleaned_content = clean_webflow_html(content, page_type)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Successfully processed {page_type}")
        return True
    except Exception as e:
        print(f"✗ Error processing {page_type}: {str(e)}")
        return False

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
    
    success_count = 0
    for input_file, output_file, page_type in files_to_process:
        if os.path.exists(input_file):
            if process_file(input_file, output_file, page_type):
                success_count += 1
        else:
            print(f"✗ File not found: {input_file}")
    
    print(f"\nHTML cleaning completed! {success_count}/{len(files_to_process)} files processed successfully.")