import sys

def hex_to_rgb(hex_color):
    """Converts a hex color string (e.g., '#RRGGBB') to an RGB tuple."""
    hex_color = hex_color.lstrip('#')
    if len(hex_color) != 6:
        raise ValueError("Invalid hex color format. Expected '#RRGGBB'.")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def rgb_to_hex(rgb_color):
    """Converts an RGB tuple to a hex color string."""
    return '#{:02x}{:02x}{:02x}'.format(int(rgb_color[0]), int(rgb_color[1]), int(rgb_color[2]))

def adjust_color_lightness(rgb_color, factor):
    """
    Adjusts the lightness of an RGB color.
    Factor > 1 for lighter, Factor < 1 for darker.
    """
    r, g, b = rgb_color
    r = min(255, max(0, int(r * factor)))
    g = min(255, max(0, int(g * factor)))
    b = min(255, max(0, int(b * factor)))
    return (r, g, b)

def generate_shades(base_hex_color, num_shades=5, lightness_step=0.1):
    """
    Generates a list of hex color shades (darker and lighter) from a base hex color.
    """
    try:
        base_rgb = hex_to_rgb(base_hex_color)
    except ValueError as e:
        print(f"Error: {e}", file=sys.stderr)
        return []

    shades = []
    # Generate darker shades
    for i in range(num_shades, 0, -1):
        factor = 1 - (i * lightness_step)
        if factor <= 0: # Ensure we don't go completely black or negative
            continue
        darker_rgb = adjust_color_lightness(base_rgb, factor)
        shades.append(rgb_to_hex(darker_rgb))

    # Add the base color
    shades.append(base_hex_color.upper())

    # Generate lighter shades
    for i in range(1, num_shades + 1):
        factor = 1 + (i * lightness_step)
        if factor >= 2.5: # Cap the lightness to avoid pure white too quickly
            continue
        lighter_rgb = adjust_color_lightness(base_rgb, factor)
        shades.append(rgb_to_hex(lighter_rgb))

    return shades

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python hex_shades_generator.py <hex_color> [num_shades] [lightness_step]")
        print("Example: python hex_shades_generator.py #3498db 3 0.15")
        sys.exit(1)

    base_color = sys.argv[1]
    num_shades = int(sys.argv[2]) if len(sys.argv) > 2 else 3
    lightness_step = float(sys.argv[3]) if len(sys.argv) > 3 else 0.1

    print(f"Generating {num_shades} darker and {num_shades} lighter shades for {base_color} with step {lightness_step}:")
    generated_shades = generate_shades(base_color, num_shades, lightness_step)

    for shade in generated_shades:
        print(shade)
