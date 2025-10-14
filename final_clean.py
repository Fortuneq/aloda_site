#!/usr/bin/env python3
import re
import os

def clean_and_fix_html(html_content, page_type="index"):
    """
    Clean Webflow HTML and fix asset paths properly
    """
    
    # Remove Webflow saved comment
    html_content = re.sub(r'<!-- saved from url=.*?-->', '', html_content)
    
    # Remove Webflow data attributes
    html_content = re.sub(r'\s*data-wf-[^=]*="[^"]*"', '', html_content)
    html_content = re.sub(r'\s*data-w-id="[^"]*"', '', html_content)
    
    # Remove Webflow generator meta tag
    html_content = re.sub(r'<meta content="Webflow" name="generator"[^>]*>', '', html_content)
    
    # Remove Webflow currency settings script
    html_content = re.sub(r'<script type="text/javascript">window\.__WEBFLOW_CURRENCY_SETTINGS.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Remove Webflow-specific scripts
    html_content = re.sub(r'<script[^>]*webflow[^>]*>.*?</script>', '', html_content, flags=re.DOTALL)
    
    # Update CSS link
    html_content = re.sub(r'href="[^"]*aloda\.webflow\.shared[^"]*\.css"', 'href="css/main.css"', html_content)
    
    # Update JS scripts
    html_content = re.sub(r'src="[^"]*jquery[^"]*\.js"', 'src="js/jquery.min.js"', html_content)
    html_content = re.sub(r'src="[^"]*webfont\.js"', 'src="js/webfont.js"', html_content)
    
    # Fix image and asset paths - replace the complex file path references
    html_content = re.sub(r'src="ALODA[^"]*_files/([^"]*)"', r'src="images/\1"', html_content)
    html_content = re.sub(r'href="ALODA[^"]*_files/([^"]*)"', r'href="images/\1"', html_content)
    
    # Update external CDN favicon links
    html_content = re.sub(r'href="https://cdn\.prod\.website-files\.com/[^"]*"', 'href="images/favicon.png"', html_content)
    
    # Update navigation links to relative paths
    html_content = re.sub(r'href="https://aloda\.webflow\.io/"', 'href="index.html"', html_content)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/about"', 'href="about.html"', html_content)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/service"', 'href="services.html"', html_content)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/project"', 'href="cases.html"', html_content)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/contact"', 'href="#contact"', html_content)
    
    # Update project links to be local (since they won't work anyway)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/projects/[^"]*"', 'href="#"', html_content)
    html_content = re.sub(r'href="https://aloda\.webflow\.io/service/[^"]*"', 'href="services.html"', html_content)
    
    # Remove remaining external CDN image references in srcset
    html_content = re.sub(r'srcset="[^"]*cdn\.prod\.website-files\.com[^"]*"', 'srcset=""', html_content)
    
    # Clean up malformed CSS references
    html_content = re.sub(r'href="ALODA[^"]*_files/css"', 'href="css/main.css"', html_content)
    
    # Remove some Webflow class names but keep essential ones
    html_content = re.sub(r'\bw-mod-[a-zA-Z0-9-]*\b', '', html_content)
    html_content = re.sub(r'\bwf-[a-zA-Z0-9-]*\b', '', html_content)
    
    # Clean up extra spaces and empty attributes
    html_content = re.sub(r'\s+', ' ', html_content)
    html_content = re.sub(r'class=""', '', html_content)
    html_content = re.sub(r'srcset=""', '', html_content)
    html_content = re.sub(r'aria-controls="[^"]*"', '', html_content)
    
    return html_content

def process_file(input_file, output_file, page_type):
    """Process a single HTML file"""
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        cleaned_content = clean_and_fix_html(content, page_type)
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✓ Successfully cleaned {page_type}: {os.path.basename(output_file)}")
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
    
    print(f"\n🎉 Final HTML cleaning completed! {success_count}/{len(files_to_process)} files processed successfully.")
    print(f"\nStandalone site created in: {base_dir}/standalone_site/")
    print("Files created:")
    print("- index.html (main page)")
    print("- about.html (about page)")
    print("- services.html (services page)")
    print("- cases.html (cases page)")
    print("- css/main.css (consolidated styles)")
    print("- js/jquery.min.js, js/webfont.js (scripts)")
    print("- images/ (all site images)")