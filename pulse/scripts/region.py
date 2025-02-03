import yaml
import re
import sys

def process_yaml_with_regions(input_file, output_file):
    with open(input_file, "r", encoding="utf-8") as f:
        lines = f.readlines()
    
    output_lines = []
    current_region = None
    
    for i, line in enumerate(lines):
        match = re.match(r'# https://.*/([^/]+)/$', line.strip())
        if match:
            if current_region:
                output_lines.append(f"#endregion {current_region}\n")
            current_region = match.group(1)
            output_lines.append(f"#region {current_region}\n")
            continue
        
        output_lines.append(line)
    
    if current_region:
        output_lines.append(f"#endregion {current_region}\n")
    
    with open(output_file, "w", encoding="utf-8") as f:
        f.writelines(output_lines)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Использование: python script.py input.yml output.yml")
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    process_yaml_with_regions(input_file, output_file)