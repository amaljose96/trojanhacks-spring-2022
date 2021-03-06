
let colors = {
    "background": "#dddddd",
    "primary": "#d62828",
    "secondary": "#f77f00",
    "shadeContrast":0.4
}

export function getLighterShade(baseColor) {
    let rgb = hexToRgb(baseColor);
    let hsl = rgbToHsl(...rgb);
    hsl[2] = hsl[2] / (1 - colors.shadeContrast);
    if (hsl[2] > 1) {
        hsl[2] = 1;
    }
    let newRgb = hslToRgb(...hsl);
    let newHex = rgbToHex(...newRgb);
    return newHex;
}
export function getDarkerShade(baseColor) {
    let rgb = hexToRgb(baseColor);
    let hsl = rgbToHsl(...rgb);
    hsl[2] = hsl[2] * (1 - colors.shadeContrast);
    hsl[1] = hsl[1] * 0.5;
    let newRgb = hslToRgb(...hsl);
    let newHex = rgbToHex(...newRgb);
    return newHex;
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16),
        ]
        : null;
}

function rgbToHsl(r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [(r * 255).toFixed(0), (g * 255).toFixed(0), (b * 255).toFixed(0)];
}
function componentToHex(c) {
    c = parseInt(c);
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

colors.darkShade=getDarkerShade(colors.background)
colors.lightShade=getLighterShade(colors.background)
let overallBrightness = rgbToHsl(...hexToRgb(colors.background))[2];
colors.text = overallBrightness>0.5 ? "#222222":"#FFFFFF";
let primaryBrightness = rgbToHsl(...hexToRgb(colors.primary))[2];
colors.highlightText = primaryBrightness>0.5 ? "#222222":"#FFFFFF"
   


export default colors;