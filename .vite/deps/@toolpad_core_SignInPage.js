import {
  BrandingContext,
  RouterContext,
  useLocaleText
} from "./chunk-RV2D6KOB.js";
import {
  Alert_default,
  Box_default,
  Button_default,
  Container_default,
  Divider_default,
  FormControlLabel_default,
  Stack_default,
  TextField_default,
  Typography_default
} from "./chunk-JA77F7RF.js";
import {
  Checkbox_default,
  createSvgIcon
} from "./chunk-77LRWX3W.js";
import "./chunk-DPC33NHT.js";
import {
  alpha,
  require_jsx_runtime,
  require_prop_types,
  useTheme
} from "./chunk-32EPLIDQ.js";
import "./chunk-WEJJOBXA.js";
import {
  __toESM,
  require_react
} from "./chunk-VCDLJVZS.js";

// node_modules/@toolpad/core/esm/SignInPage/SignInPage.js
var React21 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@mui/icons-material/esm/GitHub.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var GitHub_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
}), "GitHub");

// node_modules/@mui/icons-material/esm/Password.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var Password_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z"
}), "Password");

// node_modules/@mui/icons-material/esm/Fingerprint.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var Fingerprint_default = createSvgIcon((0, import_jsx_runtime3.jsx)("path", {
  d: "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28M3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7s-.54.11-.7-.12c-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21m6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39s-4.66 1.97-4.66 4.39c0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15m7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12M14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94s3.08 1.32 3.08 2.94c0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38"
}), "Fingerprint");

// node_modules/@mui/icons-material/esm/Apple.js
var React2 = __toESM(require_react());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Apple_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
}), "Apple");

// node_modules/@toolpad/core/esm/SignInPage/icons/Google.js
var React3 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var _svg;
function GoogleIcon() {
  return _svg || (_svg = (0, import_jsx_runtime5.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    children: [(0, import_jsx_runtime5.jsx)("path", {
      d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
      fill: "#4285F4"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
      fill: "#34A853"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
      fill: "#FBBC05"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
      fill: "#EA4335"
    }), (0, import_jsx_runtime5.jsx)("path", {
      d: "M1 1h22v22H1z",
      fill: "none"
    })]
  }));
}
var Google_default = GoogleIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Facebook.js
var React4 = __toESM(require_react(), 1);
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _svg2;
function FacebookIcon() {
  return _svg2 || (_svg2 = (0, import_jsx_runtime6.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 48 48",
    children: [(0, import_jsx_runtime6.jsx)("path", {
      fill: "#316FF6",
      d: "M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
    }), (0, import_jsx_runtime6.jsx)("path", {
      fill: "#fff",
      d: "M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
    })]
  }));
}
var Facebook_default = FacebookIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Twitter.js
var React5 = __toESM(require_react(), 1);
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var _svg3;
function TwitterIcon() {
  return _svg3 || (_svg3 = (0, import_jsx_runtime7.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "117.8 161.3 464.4 377.4",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime7.jsx)("path", {
      fill: "#1da1f2",
      d: "M582.2 206c-17 7.5-35.4 12.7-54.7 15a95.5 95.5 0 0 0 41.9-52.8 190.2 190.2 0 0 1-60.5 23.2A95.2 95.2 0 0 0 344 256.6a97.3 97.3 0 0 0 2.4 21.7c-79.2-4-149.4-42-196.4-99.6A95.2 95.2 0 0 0 179.6 306a95 95 0 0 1-43.1-11.9v1.2a95.3 95.3 0 0 0 76.4 93.5 96 96 0 0 1-25 3.3 96 96 0 0 1-18-1.7 95.3 95.3 0 0 0 89 66.1 191.2 191.2 0 0 1-141 39.5c42 27 92.1 42.8 146 42.8 175.2 0 271-145.2 271-271 0-4.2 0-8.3-.3-12.4a193.7 193.7 0 0 0 47.6-49.3z"
    })
  }));
}
var Twitter_default = TwitterIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Instagram.js
var React6 = __toESM(require_react(), 1);
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var _svg4;
function InstagramIcon() {
  return _svg4 || (_svg4 = (0, import_jsx_runtime8.jsxs)("svg", {
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 3364.7 3364.7",
    children: [(0, import_jsx_runtime8.jsxs)("defs", {
      children: [(0, import_jsx_runtime8.jsxs)("radialGradient", {
        id: "a",
        cx: "217.8",
        cy: "3291",
        r: "4271.9",
        gradientUnits: "userSpaceOnUse",
        children: [(0, import_jsx_runtime8.jsx)("stop", {
          offset: ".1",
          stopColor: "#fa8f21"
        }), (0, import_jsx_runtime8.jsx)("stop", {
          offset: ".8",
          stopColor: "#d82d7e"
        })]
      }), (0, import_jsx_runtime8.jsxs)("radialGradient", {
        id: "b",
        cx: "2330.6",
        cy: "3182.9",
        r: "3759.3",
        gradientUnits: "userSpaceOnUse",
        children: [(0, import_jsx_runtime8.jsx)("stop", {
          offset: ".6",
          stopColor: "#8c3aaa",
          stopOpacity: "0"
        }), (0, import_jsx_runtime8.jsx)("stop", {
          offset: "1",
          stopColor: "#8c3aaa"
        })]
      })]
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "url(#a)",
      d: "M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1A640 640 0 0 1 236 236 633.5 633.5 0 0 1 472 82.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9"
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "url(#b)",
      d: "M853.2 3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5s-116.4-140.1-153.5-235.9c-28.2-72.3-61.5-181-70.6-381.1-10-216.3-12-281.2-12-829.2s2.2-612.8 11.9-829.3C21 653.1 54.5 544.6 82.5 472.1A640 640 0 0 1 236 236 633.5 633.5 0 0 1 472 82.5C544.3 54.3 653 21 853.1 11.9 1069.5 2 1134.5 0 1682.3 0c548 0 612.8 2.2 829.3 11.9 200.1 9.1 308.6 42.6 381.1 70.6 95.8 37.1 164.1 81.7 236 153.5s116.2 140.2 153.5 236c28.2 72.3 61.5 181 70.6 381.1 9.9 216.5 11.9 281.3 11.9 829.3 0 547.8-2 612.8-11.9 829.3-9.1 200.1-42.6 308.8-70.6 381.1-37.3 95.8-81.7 164.1-153.5 235.9s-140.2 116.2-236 153.5c-72.3 28.2-181 61.5-381.1 70.6-216.3 9.9-281.3 11.9-829.3 11.9-547.8 0-612.8-1.9-829.1-11.9"
    }), (0, import_jsx_runtime8.jsx)("path", {
      fill: "#fff",
      d: "M1269.3 1689.5a416.6 416.6 0 1 1 833.2 0 416.6 416.6 0 0 1-833.3 0m-225.2 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.1-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M1181 2707c-122-5.5-188.2-25.8-232.2-43-58.3-22.7-100-49.8-143.8-93.5s-70.8-85.3-93.5-143.7c-17.1-44-37.4-110.2-43-232.1-6-131.8-7.2-171.3-7.2-505.2s1.3-373.2 7.2-505.1c5.6-121.9 26-188 43-232.1 22.8-58.4 49.8-100 93.5-143.8s85.4-70.9 143.8-93.5c44-17.2 110.3-37.5 232.1-43 131.8-6 171.4-7.3 505-7.3s373.3 1.3 505.2 7.3c121.9 5.6 188 26 232.1 43 58.4 22.6 100 49.8 143.8 93.5s70.8 85.4 93.5 143.8c17.2 44 37.5 110.2 43 232.1 6 131.9 7.3 171.3 7.3 505.2s-1.2 373.2-7.3 505.1c-5.5 121.9-26 188.1-43 232.1-22.7 58.4-49.8 100-93.5 143.7s-85.4 70.8-143.8 93.5c-44 17.2-110.2 37.5-232.1 43-131.8 6-171.3 7.3-505.1 7.3s-373.3-1.2-505-7.3m-10.4-2260c-133 6.2-224 27.3-303.4 58.2-82.2 31.9-151.9 74.7-221.4 144.1S533.4 788.5 501.5 870.8c-31 79.4-52 170.3-58 303.4-6.2 133.3-7.6 175.9-7.6 515.3s1.4 382 7.5 515.4c6 133 27.2 224 58 303.4 32 82.2 74.7 152 144.3 221.4S784.8 2842 867 2874c79.6 30.9 170.3 52 303.4 58 133.4 6.1 175.9 7.6 515.4 7.6s382-1.4 515.3-7.6c133-6 224-27.1 303.4-58 82.2-32 151.9-74.7 221.4-144.2s112.2-139.2 144.2-221.4c31-79.5 52.1-170.4 58-303.4 6.1-133.4 7.5-176 7.5-515.4s-1.4-382-7.4-515.3c-6-133.1-27.2-224-58-303.4-32-82.2-74.8-151.9-144.3-221.5s-139.2-112.2-221.3-144.2c-79.5-30.9-170.4-52-303.4-58-133.3-6.1-175.9-7.6-515.3-7.6s-382.1 1.4-515.4 7.6"
    })]
  }, "instagram"));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/TikTok.js
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var _svg5;
function TikTokIcon() {
  return _svg5 || (_svg5 = (0, import_jsx_runtime9.jsxs)("svg", {
    viewBox: "-58.35000000000002 -186.70564362582354 2548.289756960746 2538.849821747569",
    width: "24",
    height: "24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime9.jsxs)("g", {
      fill: "#25f4ee",
      children: [(0, import_jsx_runtime9.jsx)("path", {
        d: "M779.38 890.55v-88.12a650.81 650.81 0 0 0-92.45-7.94c-299.8-.64-565.22 193.64-655.25 479.6S47.92 1871.34 294 2042.56a684.7 684.7 0 0 1 485.36-1152z"
      }), (0, import_jsx_runtime9.jsx)("path", {
        d: "M796 1888.72c167.62-.23 305.4-132.28 312.74-299.74V94.62h273A512.17 512.17 0 0 1 1373.8 0h-373.41v1492.92c-6.21 168.31-144.32 301.63-312.74 301.9a317.76 317.76 0 0 1-144.45-36.11A313.48 313.48 0 0 0 796 1888.72zM1891.66 601.64v-83.06a509.85 509.85 0 0 1-282.4-85.22 517.79 517.79 0 0 0 282.4 168.28z"
      })]
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1609.26 433.36a514.19 514.19 0 0 1-127.84-339.47h-99.68a517.16 517.16 0 0 0 227.52 339.47zM686.93 1167.9a313.46 313.46 0 0 0-144.46 590.81A312.75 312.75 0 0 1 796 1262.51a329.69 329.69 0 0 1 92.44 14.49V897.05a654.77 654.77 0 0 0-92.44-7.22h-16.62v288.9a321.13 321.13 0 0 0-92.45-10.83z",
      fill: "#fe2c55"
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1891.66 601.64v288.91a886.23 886.23 0 0 1-517.86-168.29v759.1c-.8 378.78-308.09 685.43-686.87 685.43A679.65 679.65 0 0 1 294 2042.56 685.43 685.43 0 0 0 1481.42 1576V819.05A887.71 887.71 0 0 0 2000 985.17v-372a529.59 529.59 0 0 1-108.34-11.53z",
      fill: "#fe2c55"
    }), (0, import_jsx_runtime9.jsx)("path", {
      d: "M1373.8 1481.36v-759.1a886.11 886.11 0 0 0 518.58 166.12v-288.9a517.87 517.87 0 0 1-283.12-166.12 517.16 517.16 0 0 1-227.52-339.47h-273V1589a313.46 313.46 0 0 1-567 171.17 313.46 313.46 0 0 1 144.46-590.83 321.35 321.35 0 0 1 92.45 14.45V894.88A684.71 684.71 0 0 0 293.29 2050.5a679.65 679.65 0 0 0 393.64 116.29c378.78 0 686.07-306.65 686.87-685.43z"
    })]
  }));
}
var TikTok_default = TikTokIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/LinkedIn.js
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var _svg6;
function LinkedInIcon() {
  return _svg6 || (_svg6 = (0, import_jsx_runtime10.jsxs)("svg", {
    viewBox: "0 5 2490 2490.0000000000005",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    children: [(0, import_jsx_runtime10.jsx)("path", {
      d: "M185.2 313.1H2252V2291H185.2z",
      fill: "#fff"
    }), (0, import_jsx_runtime10.jsx)("path", {
      d: "M0 183.4C0 84.9 82.4 5 184 5h2122c101.6 0 184 79.9 184 178.4v2133.3c0 98.5-82.4 178.3-184 178.3H184c-101.6 0-184-79.8-184-178.3z",
      fill: "#0a66c2"
    }), (0, import_jsx_runtime10.jsx)("path", {
      d: "M756.7 2088.8v-1121H384.1v1121zm-186.2-1274c129.9 0 210.8-86.1 210.8-193.7-2.4-110-80.9-193.7-208.3-193.7-127.5 0-210.8 83.7-210.8 193.7 0 107.6 80.8 193.7 205.9 193.7zm392.4 1274h372.6v-626c0-33.5 2.4-67 12.3-90.9 26.9-67 88.2-136.3 191.2-136.3 134.8 0 188.7 102.8 188.7 253.5v599.6h372.6V1446c0-344.3-183.8-504.5-428.9-504.5-201 0-289.2 112.3-338.3 188.8h2.5V967.8H962.9c4.9 105.2 0 1121 0 1121z",
      fill: "#fff"
    })]
  }));
}
var LinkedIn_default = LinkedInIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Slack.js
var React9 = __toESM(require_react(), 1);
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var _svg7;
function SlackIcon() {
  return _svg7 || (_svg7 = (0, import_jsx_runtime11.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2447.6 2452.5",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime11.jsxs)("g", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      children: [(0, import_jsx_runtime11.jsx)("path", {
        fill: "#36c5f0",
        d: "M897.4 0a245 245 0 0 0-244.7 245.2 245 245 0 0 0 244.8 245.2h244.8V245.3A245.2 245.2 0 0 0 897.4 0c.1 0 .1 0 0 0m0 654H244.8A245 245 0 0 0 0 899.2a245 245 0 0 0 244.7 245.3h652.7a245 245 0 0 0 244.8-245.2A245 245 0 0 0 897.4 654z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#2eb67d",
        d: "M2447.6 899.2A245 245 0 0 0 2202.8 654 245 245 0 0 0 1958 899.2v245.3h244.8a245 245 0 0 0 244.8-245.3zm-652.7 0v-654A245 245 0 0 0 1550.2 0a245 245 0 0 0-244.8 245.2v654a245 245 0 0 0 244.7 245.3 245 245 0 0 0 244.8-245.3z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#ecb22e",
        d: "M1550.1 2452.5a245 245 0 0 0 244.8-245.2 245 245 0 0 0-244.8-245.2h-244.8v245.2a245.1 245.1 0 0 0 244.8 245.2zm0-654.1h652.7a245 245 0 0 0 244.8-245.2 245 245 0 0 0-244.7-245.3h-652.7a245 245 0 0 0-244.8 245.2 245 245 0 0 0 244.7 245.3z"
      }), (0, import_jsx_runtime11.jsx)("path", {
        fill: "#e01e5a",
        d: "M0 1553.2a245 245 0 0 0 244.8 245.2 245 245 0 0 0 244.8-245.2V1308H244.8A245 245 0 0 0 0 1553.2zm652.7 0v654a245 245 0 0 0 244.7 245.3 245 245 0 0 0 244.8-245.2v-653.9a244.8 244.8 0 1 0-489.5-.2s0 .1 0 0"
      })]
    })
  }));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/Spotify.js
var React10 = __toESM(require_react(), 1);
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var _svg8;
function SpotifyIcon() {
  return _svg8 || (_svg8 = (0, import_jsx_runtime12.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 2931 2931",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime12.jsx)("path", {
      d: "M1465.5 0C656.1 0 0 656.1 0 1465.5S656.1 2931 1465.5 2931 2931 2274.9 2931 1465.5C2931 656.2 2274.9.1 1465.5 0zm672.1 2113.6A91.3 91.3 0 0 1 2012 2144c-344.1-210.3-777.3-257.8-1287.4-141.3a91.3 91.3 0 1 1-40.7-178.1C1242.1 1697.1 1721 1752 2107.3 1988a91.4 91.4 0 0 1 30.3 125.6zm179.3-398.9a114.3 114.3 0 0 1-157.2 37.6c-393.8-242.1-994.4-312.2-1460.3-170.8a114.4 114.4 0 0 1-142.6-76.1 114.5 114.5 0 0 1 76.2-142.5c532.2-161.5 1193.9-83.3 1646.2 194.7a114.2 114.2 0 0 1 37.7 157.1zm15.4-415.6c-472.4-280.5-1251.6-306.3-1702.6-169.5a137 137 0 1 1-79.5-262.3c517.7-157.1 1378.2-126.8 1922 196a137.1 137.1 0 0 1-139.9 235.8z"
    })
  }));
}
var Spotify_default = SpotifyIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Twitch.js
var React11 = __toESM(require_react(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var _svg9;
function TwitchIcon() {
  return _svg9 || (_svg9 = (0, import_jsx_runtime13.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 300 300",
    children: [(0, import_jsx_runtime13.jsx)("path", {
      fill: "#65459B",
      fillRule: "evenodd",
      d: "M215.2 260.8h-58.7L117.4 300H78.3v-39.2H6.6V52.2L26.1 0h267.3v182.6l-78.2 78.2zm52.2-91.2V26.1H52.2v189.1h58.7v39.1l39.1-39.1h71.7l45.7-45.6z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime13.jsx)("path", {
      fill: "#65459B",
      d: "M195.6 78.3v78.3h26.1V78.3h-26.1zm-71.7 78.2H150V78.3h-26.1v78.2z"
    })]
  }));
}
var Twitch_default = TwitchIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Discord.js
var React12 = __toESM(require_react(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var _svg10;
function DiscordIcon() {
  return _svg10 || (_svg10 = (0, import_jsx_runtime14.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 199",
    width: "24",
    height: "24",
    children: (0, import_jsx_runtime14.jsx)("path", {
      fill: "#5865F2",
      d: "M216.9 16.6A208.5 208.5 0 0 0 164 0c-2.2 4.1-4.9 9.6-6.7 14a194 194 0 0 0-58.6 0C97 9.6 94.2 4.1 92 0a207.8 207.8 0 0 0-53 16.6A221.5 221.5 0 0 0 1 165a211.2 211.2 0 0 0 65 33 161 161 0 0 0 13.8-22.8c-7.6-2.9-15-6.5-21.8-10.6l5.3-4.3a149.3 149.3 0 0 0 129.6 0c1.7 1.5 3.5 3 5.3 4.3a136 136 0 0 1-21.9 10.6c4 8 8.7 15.7 13.9 22.9a210.7 210.7 0 0 0 64.8-33.2c5.3-56.3-9-105.1-38-148.4ZM85.5 135.1c-12.7 0-23-11.8-23-26.2 0-14.4 10.1-26.2 23-26.2 12.8 0 23.2 11.8 23 26.2 0 14.4-10.2 26.2-23 26.2Zm85 0c-12.6 0-23-11.8-23-26.2 0-14.4 10.2-26.2 23-26.2 12.9 0 23.3 11.8 23 26.2 0 14.4-10.1 26.2-23 26.2Z"
    })
  }));
}
var Discord_default = DiscordIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/Line.js
var React13 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var _svg11;
function LineIcon() {
  return _svg11 || (_svg11 = (0, import_jsx_runtime15.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 377.8 377.8",
    height: "24",
    width: "24",
    children: [(0, import_jsx_runtime15.jsx)("path", {
      fill: "#00C300",
      fillRule: "evenodd",
      d: "M77.3 0h223.1a77.5 77.5 0 0 1 77.4 77.3v223.1a77.5 77.5 0 0 1-77.4 77.4h-223A77.5 77.5 0 0 1 0 300.4v-223A77.5 77.5 0 0 1 77.3 0z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime15.jsx)("path", {
      fill: "#FFF",
      fillRule: "evenodd",
      d: "M188.5 62.6c76.6 0 138.6 49.7 138.6 111A94.8 94.8 0 0 1 304 235l-.1.1a119 119 0 0 1-15.1 15c-38.3 35.5-101.4 77.6-109.7 71.1-7.3-5.6 11.9-33.3-10.2-37.9l-4.6-.6C99.3 273.5 50 228.1 50 173.5c0-61.3 62-111 138.6-111z",
      clipRule: "evenodd"
    }), (0, import_jsx_runtime15.jsx)("path", {
      fill: "#00C300",
      fillRule: "evenodd",
      d: "M108.1 209h28c4 0 7.2-3.3 7.2-7.3v-.6c0-4-3.3-7.2-7.2-7.2h-20.2V148c0-4-3.2-7.2-7.2-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.2 7.3 7.2 7.3zm173.2-33.6v-.7c0-4-3.2-7.2-7.2-7.2H254v-11.4h20c4 0 7.3-3.3 7.3-7.3v-.6c0-4-3.2-7.2-7.2-7.2h-28c-4 0-7.2 3.3-7.2 7.2V202c0 4 3.3 7.2 7.2 7.2h28c4 0 7.2-3.3 7.2-7.2v-.7c0-4-3.2-7.2-7.2-7.2H254v-11.4h20c4 0 7.3-3.3 7.3-7.2zm-53.7 31.4a7.2 7.2 0 0 0 2-5V148c0-4-3.2-7.2-7.2-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v31.5l-26.1-35a7.2 7.2 0 0 0-6.3-3.7h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.2 7.3 7.2 7.3h.6c4 0 7.2-3.3 7.2-7.3v-32l26.3 36 .6.6a6 6 0 0 0 2.8 2.1 6 6 0 0 0 2.7.6h.6a7.2 7.2 0 0 0 3.4-.9 5 5 0 0 0 1.8-1.3zm-71.3 2.2h.6c4 0 7.3-3.3 7.3-7.3v-53.6c0-4-3.3-7.2-7.3-7.2h-.6c-4 0-7.2 3.2-7.2 7.2v53.6c0 4 3.3 7.3 7.2 7.3z",
      clipRule: "evenodd"
    })]
  }));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/Auth0.js
var React14 = __toESM(require_react(), 1);
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var _svg12;
function Auth0Icon() {
  return _svg12 || (_svg12 = (0, import_jsx_runtime16.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 64 64",
    children: (0, import_jsx_runtime16.jsx)("path", {
      d: "M49.012 51.774L42.514 32l17.008-12.22h-21.02L32.005 0h21.032l6.506 19.78c3.767 11.468-.118 24.52-10.53 31.993zm-34.023 0L31.998 64l17.015-12.226-17.008-12.22zm-10.516-32c-3.976 12.1.64 24.917 10.5 32.007v-.007L21.482 32 4.474 19.774l21.025.007L31.998 0H10.972z",
      fill: "#eb5424"
    })
  }));
}
var Auth0_default = Auth0Icon;

// node_modules/@toolpad/core/esm/SignInPage/icons/MicrosoftEntra.js
var React15 = __toESM(require_react(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var _svg13;
function MicrosoftEntraIdIcon() {
  return _svg13 || (_svg13 = (0, import_jsx_runtime17.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    height: "24",
    width: "24",
    children: [(0, import_jsx_runtime17.jsx)("path", {
      fill: "#f3f3f3",
      d: "M0 0h23v23H0z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#f35325",
      d: "M1 1h10v10H1z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#81bc06",
      d: "M12 1h10v10H12z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#05a6f0",
      d: "M1 12h10v10H1z"
    }), (0, import_jsx_runtime17.jsx)("path", {
      fill: "#ffba08",
      d: "M12 12h10v10H12z"
    })]
  }));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/Cognito.js
var React16 = __toESM(require_react(), 1);
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var _svg14;
function CognitoIcon() {
  return _svg14 || (_svg14 = (0, import_jsx_runtime18.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 299",
    width: "24",
    height: "24",
    children: [(0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "m208.8 58 25.7-6.6.2.3.7 155.6-.9.9-5.3.2-20.1-3.2-.3-.7V58M59.7 219h.1l68 19.7.2.2.3.2-.1 59.2-.2.3-68.3-33.2V219"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#CFB2C1",
      d: "M208.8 204.5 128 223.8 87.6 214l-27.9 5 68.3 19.9 105.4-28.6 1.1-2.1-25.7-3.7"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#512843",
      d: "m196.3 79.6-.7-.7-66.9-19.5-.7.3-.7-.3L22.1 89.7l-.6.7.8.5 24.1 3.5.8-.3L128 74.8l40.5 9.8 27.9-5"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "m47.2 240.5-25.7 6.3v-.2l-1-155 1-1.2 25.7 3.7v146.4"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "m82 180.4 46 5.4.3-.5.2-72-.5-.5-46 5.4v62.2"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "m174 180.4-46 5.4v-73l46 5.4v62.2m22.3-100.8L128 59.7V0l68.3 33.2v46.4"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#7A3E65",
      d: "M128 0 0 61.8v175l21.5 10V90.4L128 59.7V0"
    }), (0, import_jsx_runtime18.jsx)("path", {
      fill: "#C17B9E",
      d: "M234.5 51.4v156.8L128 238.9v59.7l128-61.8v-175l-21.5-10.4"
    })]
  }));
}
var Cognito_default = CognitoIcon;

// node_modules/@toolpad/core/esm/SignInPage/icons/GitLab.js
var React17 = __toESM(require_react(), 1);
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var _svg15;
function GitLabIcon() {
  return _svg15 || (_svg15 = (0, import_jsx_runtime19.jsxs)("svg", {
    height: "24",
    viewBox: "-.1 .5 960.2 923.9",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime19.jsx)("path", {
      d: "m958.9 442.4c1.1 26.1-2 52.1-9.2 77.2-7.1 25.1-18.3 48.8-33.1 70.3a240.43 240.43 0 0 1 -53.6 56.2l-.5.4-199.9 149.8-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5 130.7-340.5q1-2.5 2.4-4.8 1.3-2.3 3.1-4.3 1.7-2.1 3.7-3.9 2-1.7 4.2-3.2c3.1-1.9 6.3-3.3 9.8-4.1 3.4-.9 7-1.3 10.5-1.1 3.6.2 7.1.9 10.4 2.2 3.3 1.2 6.5 3 9.3 5.2q2 1.7 3.9 3.6 1.8 2 3.2 4.3 1.5 2.2 2.6 4.7 1.1 2.4 1.8 5l88.1 269.7h356.6l88.1-269.7q.7-2.6 1.9-5 1.1-2.4 2.6-4.7 1.4-2.2 3.2-4.2 1.8-2 3.9-3.7c2.8-2.2 5.9-3.9 9.2-5.2 3.4-1.2 6.9-1.9 10.4-2.1 3.6-.2 7.1.1 10.6 1 3.4.9 6.7 2.3 9.7 4.2q2.3 1.4 4.3 3.2 2 1.7 3.7 3.8 1.7 2.1 3.1 4.4 1.3 2.3 2.3 4.8l130.5 340.6 1.3 3.5c9.3 24.3 14.6 50 15.7 76.1z",
      fill: "#e24329"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m959 442.5c1.1 26-2 52.1-9.2 77.2s-18.4 48.9-33.2 70.4-32.9 40.5-53.7 56.2l-.5.4-199.9 149.8s-84.9-64.1-182.5-138l286.5-216.8c12.9-9.7 26.4-18.6 40.3-26.8 13.9-8.3 28.3-15.7 43-22.3 14.8-6.6 29.9-12.5 45.2-17.4 15.4-5 31-9.1 46.9-12.4l1.3 3.5c9.3 24.4 14.6 50.1 15.8 76.2z",
      fill: "#fc6d26"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m480 658.5c97.6 73.7 182.6 138 182.6 138l-98.3 74.5-59.9 45.2c-3.5 2.7-7.4 4.7-11.5 6.1s-8.5 2.1-12.9 2.1c-4.3 0-8.7-.7-12.8-2.1s-8-3.4-11.5-6.1l-59.9-45.2-98.3-74.5s84.9-64.3 182.5-138z",
      fill: "#fca326"
    }), (0, import_jsx_runtime19.jsx)("path", {
      d: "m480 658.3c-97.7 73.9-182.5 138-182.5 138l-198.7-148.9-1.2-.8-.4-.4c-20.9-15.7-39-34.7-53.8-56.2s-26-45.3-33.2-70.4c-7.2-25.1-10.3-51.2-9.2-77.3 1.2-26.1 6.5-51.8 15.8-76.2l1.3-3.5c15.9 3.3 31.5 7.4 46.9 12.4 15.3 5 30.4 10.8 45.2 17.5 14.7 6.6 29.1 14.1 43 22.3s27.3 17.2 40.3 26.9z",
      fill: "#fc6d26"
    })]
  }));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/Keycloak.js
var React18 = __toESM(require_react(), 1);
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var _svg16;
function KeycloakIcon() {
  return _svg16 || (_svg16 = (0, import_jsx_runtime20.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 1024 1024",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, import_jsx_runtime20.jsx)("circle", {
      cx: "512",
      cy: "512",
      r: "512",
      fill: "#008aaa"
    }), (0, import_jsx_runtime20.jsx)("path", {
      d: "M786.2 395.5h-80.6c-1.5 0-3-.8-3.7-2.1l-64.7-112.2c-.8-1.3-2.2-2.1-3.8-2.1h-264c-1.5 0-3 .8-3.7 2.1l-67.3 116.4-64.8 112.2c-.7 1.3-.7 2.9 0 4.3l64.8 112.2 67.2 116.5c.7 1.3 2.2 2.2 3.7 2.1h264.1c1.5 0 3-.8 3.8-2.1L702 630.6c.7-1.3 2.2-2.2 3.7-2.1h80.6c2.7 0 4.8-2.2 4.8-4.8V400.4c-.1-2.7-2.3-4.9-4.9-4.9zM477.5 630.6l-20.3 35c-.3.5-.8 1-1.3 1.3-.6.3-1.2.5-1.9.5h-40.3c-1.4 0-2.7-.7-3.3-2l-60.1-104.3-5.9-10.3-21.6-36.9c-.3-.5-.5-1.1-.4-1.8 0-.6.2-1.3.5-1.8l21.7-37.6 65.9-114c.7-1.2 2-2 3.3-2H454c.7 0 1.4.2 2.1.5.5.3 1 .7 1.3 1.3l20.3 35.2c.6 1.2.5 2.7-.2 3.8l-65.1 112.8c-.3.5-.4 1.1-.4 1.6 0 .6.2 1.1.4 1.6l65.1 112.7c.9 1.5.8 3.1 0 4.4zm202.1-116.7L658 550.8l-5.9 10.3L592 665.4c-.7 1.2-1.9 2-3.3 2h-40.3c-.7 0-1.3-.2-1.9-.5-.5-.3-1-.7-1.3-1.3l-20.3-35c-.9-1.3-.9-2.9-.1-4.2l65.1-112.7c.3-.5.4-1.1.4-1.6 0-.6-.2-1.1-.4-1.6l-65.1-112.8c-.7-1.2-.8-2.6-.2-3.8l20.3-35.2c.3-.5.8-1 1.3-1.3.6-.4 1.3-.5 2.1-.5h40.4c1.4 0 2.7.7 3.3 2l65.9 114 21.7 37.6c.3.6.5 1.2.5 1.8 0 .4-.2 1-.5 1.6z",
      fill: "#fff"
    })]
  }, "keycloak"));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/Okta.js
var React19 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var _svg17;
function OktaIcon() {
  return _svg17 || (_svg17 = (0, import_jsx_runtime21.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 256 256",
    height: "24",
    width: "24",
    children: (0, import_jsx_runtime21.jsx)("path", {
      fill: "#000000",
      d: "m140.8 1.8-5.2 64.8a66.1 66.1 0 0 0-17 .3l-3-31.4c0-1 .8-1.9 1.8-1.9h5.3l-2.6-31.8c0-1 .7-1.8 1.7-1.8h17.4c1 0 1.8.9 1.6 1.8ZM96.8 5c-.2-1-1.2-1.5-2.1-1.2l-16.4 6c-1 .4-1.4 1.4-1 2.3l13.4 29-5 1.9c-1 .3-1.4 1.4-1 2.2l13.6 28.5a61 61 0 0 1 15.9-6L96.9 5Zm-40 18 37.6 53a61.7 61.7 0 0 0-12.8 11.2L59 65c-.7-.7-.6-1.9 0-2.5l4.2-3.4-22.4-22.7c-.7-.7-.6-1.8.1-2.5l13.3-11.1c.8-.7 1.9-.5 2.5.2ZM25 53.8c-.7-.6-1.9-.3-2.4.5L14 69.4c-.5.9-.1 2 .7 2.4l29 13.6-2.8 4.6c-.5.9-.1 2 .8 2.4l28.8 13.1c2-5.3 4.8-10.3 8.2-14.8l-53.6-37Zm-21 41c.1-1 1.1-1.6 2-1.4l63 16.4c-1.6 5.3-2.6 11-2.7 16.8L34.7 124c-1 0-1.7-1-1.5-2l1-5.2-31.9-3c-1 0-1.6-1-1.5-2l3-17.2v.1Zm-2.4 42.4c-1 .1-1.6 1-1.5 2l3 17.2c.2 1 1.2 1.5 2.1 1.3l31-8 .9 5.3c0 1 1 1.5 2 1.3l30.5-8.4c-1.8-5.3-3-10.9-3.2-16.6l-64.9 6h.1Zm10.1 45.1c-.5-.8-.1-1.9.7-2.3l58.7-28a60.6 60.6 0 0 0 8.8 14.6L54 185c-.8.6-2 .4-2.4-.5l-2.7-4.7L22.7 198c-.8.5-1.9.3-2.4-.6l-8.8-15h.1Zm71.2-12.2-45.7 46.3c-.7.7-.6 1.8.1 2.5L50.6 230c.8.7 1.9.5 2.4-.2l18.5-26 4.2 3.4c.7.7 1.9.5 2.5-.3l17.9-26A64 64 0 0 1 82.9 170Zm-9 74.3c-1-.3-1.3-1.4-1-2.3L100 183c5 2.5 10.4 4.4 16 5.5l-8 30.6c-.2 1-1.2 1.5-2.2 1.1l-5-1.8-8.5 30.8c-.3.9-1.3 1.5-2.2 1.1l-16.4-6 .1.1Zm46.7-55.1-5.3 64.9c0 1 .7 1.8 1.7 1.8h17.4c1 0 1.8-.9 1.6-1.8l-2.5-31.8h5.3c1 0 1.8-.9 1.7-1.9l-3-31.4a58.4 58.4 0 0 1-17 .2Zm62.8-175.6c.4-.9 0-1.9-1-2.3l-16.3-6c-1-.3-2 .3-2.2 1.2l-8.5 30.8-5-1.8c-1-.4-2 .2-2.3 1l-8 30.7c5.8 1.1 11 3 16 5.5l27.3-59ZM219 39.5l-45.8 46.3a62.1 62.1 0 0 0-13.1-10.7L178 49c.6-.8 1.7-1 2.5-.4l4.1 3.5 18.5-26c.6-.8 1.7-1 2.4-.3L219 37c.8.7.8 1.8.1 2.5ZM243.7 76c1-.4 1.3-1.4.8-2.3l-8.8-15c-.5-1-1.6-1.1-2.4-.6L207 76l-2.7-4.5c-.5-.9-1.6-1.2-2.4-.5l-25.8 18.3A63 63 0 0 1 185 104l58.7-28Zm9.3 23.7 3 17c.1 1-.5 2-1.5 2l-64.8 6.1a61 61 0 0 0-3.2-16.6l30.4-8.4c1-.3 2 .4 2 1.3l1 5.3 30.9-8c1-.2 2 .3 2 1.3h.2Zm-3 62.9c1 .2 2-.4 2.1-1.4l3-17.1c.2-1-.5-1.8-1.5-2l-31.8-3 1-5.2c0-1-.5-1.9-1.5-2l-31.6-2.6c-.1 5.8-1 11.5-2.7 16.8l63 16.4Zm-16.7 39.1c-.5.9-1.7 1-2.4.6l-53.6-37c3.4-4.5 6.2-9.5 8.2-14.8l28.8 13.2c1 .4 1.3 1.4.8 2.3l-2.7 4.6 28.9 13.7c.8.4 1.2 1.5.7 2.3l-8.7 15.1Zm-71.7-21.8 37.7 53c.5.8 1.7 1 2.4.3L215 222c.8-.6.8-1.7.1-2.5l-22.4-22.6 4.1-3.4c.8-.7.8-1.8.1-2.5l-22.5-22.2a61 61 0 0 1-12.8 11Zm-.3 72.2c-1 .4-2-.2-2.2-1.1l-17.3-62.7a61 61 0 0 0 16-6l13.5 28.4c.4 1 0 2-1 2.3l-5 1.9 13.3 29c.5.9 0 1.9-.9 2.2l-16.4 6Z"
    })
  }));
}

// node_modules/@toolpad/core/esm/SignInPage/icons/FusionAuth.js
var React20 = __toESM(require_react(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var _svg18;
function FusionAuthIcon() {
  return _svg18 || (_svg18 = (0, import_jsx_runtime22.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 200 200",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, import_jsx_runtime22.jsx)("g", {
      id: "fa_logo_purple_orange",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      fillRule: "evenodd",
      children: (0, import_jsx_runtime22.jsxs)("g", {
        id: "logo-white-only-copy",
        transform: "translate(25, 22)",
        fillRule: "nonzero",
        children: [(0, import_jsx_runtime22.jsx)("path", {
          d: "M42.1484996,137.754645 C36.6833384,134.611754 31.6963641,130.701607 27.3395673,126.143375 C26.0759931,127.729247 24.5313734,129.068742 22.7829727,130.094854 C21.8172658,130.640438 20.7996702,131.088456 19.745243,131.432278 C43.3171444,157.188724 81.514904,163.302868 111.940339,146.189533 C113.379034,145.362954 114.266165,143.829671 114.266165,142.169663 C114.266165,140.509655 113.379034,138.976372 111.940339,138.149793 L111.940339,138.149793 C110.544127,137.311693 108.807093,137.282725 107.383745,138.073803 C87.1145338,149.52678 62.3048166,149.4054 42.1484996,137.754645 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M42.1333109,23.8304593 C47.6002209,20.6754696 53.4933346,18.3259868 59.630634,16.8545787 C58.8680272,14.9186117 58.4764302,12.856306 58.4762967,10.7753799 C58.4791507,9.65265933 58.5910603,8.53287448 58.810447,7.43182054 C24.7434872,15.0010379 0.377235926,45.0557123 0,79.9718603 C0.00543281109,81.630629 0.893430551,83.1609286 2.33044934,83.9879579 C3.76746812,84.8149873 5.53593485,84.8135292 6.97158966,83.9841315 L6.97158966,83.9841315 C8.38121575,83.1916489 9.26556465,81.7110433 9.29545288,80.0934442 C9.54382298,56.8525337 22.0258546,35.4663534 42.1333109,23.8304593 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M140.722828,80.7925521 C140.720716,87.1061507 139.810183,93.3865586 138.019249,99.4404944 C140.061684,99.7400409 142.029781,100.420535 143.821313,101.44663 C144.782663,101.997028 145.692586,102.63284 146.540081,103.34638 C156.995816,70.0401536 143.153599,33.9149136 113.125054,16.1402728 C111.686863,15.3863646 109.959746,15.4380661 108.569167,16.2766538 C107.178589,17.1152416 106.326144,18.6191435 106.32029,20.243732 L106.32029,20.243732 C106.303683,21.8581638 107.14136,23.3611307 108.522894,24.1952112 C128.489516,36.0495444 140.728313,57.561493 140.722828,80.7925521 Z",
          id: "Path",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M75.0167349,49.5150705 C87.6608927,49.5089266 99.0634414,57.1255404 103.906409,68.8126449 C108.749376,80.4997495 106.078804,93.9552423 97.1402067,102.90369 C88.201609,111.852137 74.7556924,114.530892 63.0734243,109.690625 C51.3911563,104.850357 43.773685,93.4444937 43.773685,80.7925521 C43.7904148,63.5313487 57.7661594,49.5402038 75.0167349,49.5150705 M75.0167349,40.2290952 C52.627938,40.2290952 34.4782321,58.3899751 34.4782321,80.7925521 C34.4782321,103.195129 52.627938,121.356006 75.0167349,121.356006 C97.4055318,121.356006 115.555241,103.195129 115.555241,80.7925521 C115.559269,70.0332192 111.289555,59.7134023 103.686237,52.1054045 C96.0829187,44.4974067 85.7694496,40.2250646 75.0167349,40.2290952 Z",
          id: "Shape",
          fill: "#1E293B"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "75.0015463",
          cy: "10.8209739",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "14.4444047",
          cy: "115.763143",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("ellipse", {
          id: "Oval",
          fill: "#F58320",
          cx: "135.558688",
          cy: "115.763143",
          rx: "10.8143177",
          ry: "10.8209739"
        }), (0, import_jsx_runtime22.jsx)("path", {
          d: "M83.9780918,73.3911276 C83.9840178,69.0270314 80.8491326,65.2923902 76.5522173,64.5446237 C72.255302,63.7968572 68.0443705,66.2531497 66.5774916,70.3630144 C65.1106126,74.472879 66.8138325,79.0426297 70.6120269,81.1877 L67.7869382,95.5194112 C67.6945357,95.9718848 67.8127575,96.441852 68.1082279,96.7966347 C68.4036983,97.1514175 68.8443581,97.3525209 69.3058031,97.343483 L80.80361,97.343483 C81.265055,97.3525209 81.7057148,97.1514175 82.0011852,96.7966347 C82.2966556,96.441852 82.4148774,95.9718848 82.3224749,95.5194112 L79.4821976,81.1877 C82.2726337,79.5865952 83.9892107,76.6097505 83.9780918,73.3911276 L83.9780918,73.3911276 Z",
          id: "Path",
          fill: "#F58320"
        })]
      })
    })
  }));
}
var FusionAuth_default = FusionAuthIcon;

// node_modules/@toolpad/core/esm/SignInPage/SignInPage.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var mergeSlotSx = (defaultSx, slotProps) => {
  if (Array.isArray(slotProps == null ? void 0 : slotProps.sx)) {
    return [defaultSx, ...slotProps.sx];
  }
  if (slotProps == null ? void 0 : slotProps.sx) {
    return [defaultSx, slotProps == null ? void 0 : slotProps.sx];
  }
  return [defaultSx];
};
var getCommonTextFieldProps = (theme, baseProps = {}) => {
  var _a, _b, _c, _d, _e, _f;
  return {
    required: true,
    fullWidth: true,
    ...baseProps,
    slotProps: {
      ...baseProps.slotProps,
      htmlInput: {
        ...(_a = baseProps.slotProps) == null ? void 0 : _a.htmlInput,
        sx: mergeSlotSx({
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1)
        }, typeof ((_b = baseProps.slotProps) == null ? void 0 : _b.htmlInput) === "function" ? {} : (_c = baseProps.slotProps) == null ? void 0 : _c.htmlInput)
      },
      inputLabel: {
        ...(_d = baseProps.slotProps) == null ? void 0 : _d.inputLabel,
        sx: mergeSlotSx({
          lineHeight: theme.typography.pxToRem(12),
          fontSize: theme.typography.pxToRem(14)
        }, typeof ((_e = baseProps.slotProps) == null ? void 0 : _e.inputLabel) === "function" ? {} : (_f = baseProps.slotProps) == null ? void 0 : _f.inputLabel)
      }
    }
  };
};
var IconProviderMap = /* @__PURE__ */ new Map([["github", (0, import_jsx_runtime23.jsx)(GitHub_default, {}, "github")], ["credentials", (0, import_jsx_runtime23.jsx)(Password_default, {}, "credentials")], ["google", (0, import_jsx_runtime23.jsx)(Google_default, {}, "google")], ["facebook", (0, import_jsx_runtime23.jsx)(Facebook_default, {}, "facebook")], ["passkey", (0, import_jsx_runtime23.jsx)(Fingerprint_default, {}, "passkey")], ["twitter", (0, import_jsx_runtime23.jsx)(Twitter_default, {}, "twitter")], ["apple", (0, import_jsx_runtime23.jsx)(Apple_default, {}, "apple")], ["instagram", (0, import_jsx_runtime23.jsx)(InstagramIcon, {}, "instagram")], ["tiktok", (0, import_jsx_runtime23.jsx)(TikTok_default, {}, "tiktok")], ["linkedin", (0, import_jsx_runtime23.jsx)(LinkedIn_default, {}, "linkedin")], ["slack", (0, import_jsx_runtime23.jsx)(SlackIcon, {}, "slack")], ["spotify", (0, import_jsx_runtime23.jsx)(Spotify_default, {}, "spotify")], ["twitch", (0, import_jsx_runtime23.jsx)(Twitch_default, {}, "twitch")], ["discord", (0, import_jsx_runtime23.jsx)(Discord_default, {}, "discord")], ["line", (0, import_jsx_runtime23.jsx)(LineIcon, {}, "line")], ["auth0", (0, import_jsx_runtime23.jsx)(Auth0_default, {}, "auth0")], ["microsoft-entra-id", (0, import_jsx_runtime23.jsx)(MicrosoftEntraIdIcon, {}, "microsoft-entra-id")], ["cognito", (0, import_jsx_runtime23.jsx)(Cognito_default, {}, "cognito")], ["gitlab", (0, import_jsx_runtime23.jsx)(GitLabIcon, {}, "gitlab")], ["keycloak", (0, import_jsx_runtime23.jsx)(KeycloakIcon, {}, "keycloak")], ["okta", (0, import_jsx_runtime23.jsx)(OktaIcon, {}, "okta")], ["fusionauth", (0, import_jsx_runtime23.jsx)(FusionAuth_default, {}, "fusionauth")]]);
var defaultLocaleText = {
  signInTitle: (brandingTitle) => brandingTitle ? `Sign in to ${brandingTitle}` : "Sign in",
  signInSubtitle: "Please sign in to continue",
  providerSignInTitle: (provider) => `Sign in with ${provider}`,
  signInRememberMe: "Remember me",
  email: "Email",
  password: "Password",
  or: "or",
  with: "with",
  passkey: "Passkey",
  to: "to"
};
function SignInPage(props) {
  var _a;
  const {
    providers,
    signIn,
    slots,
    slotProps,
    sx,
    localeText: propsLocaleText
  } = props;
  const theme = useTheme();
  const branding = React21.useContext(BrandingContext);
  const router = React21.useContext(RouterContext);
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText,
    ...globalLocaleText,
    ...propsLocaleText
  };
  const passkeyProvider = providers == null ? void 0 : providers.find((provider) => provider.id === "passkey");
  const credentialsProvider = providers == null ? void 0 : providers.find((provider) => provider.id === "credentials");
  const emailProvider = providers == null ? void 0 : providers.find((provider) => provider.id === "nodemailer");
  const [{
    loading,
    selectedProviderId,
    error,
    success
  }, setFormStatus] = React21.useState({
    selectedProviderId: void 0,
    loading: false,
    error: "",
    success: ""
  });
  const callbackUrl = (router == null ? void 0 : router.searchParams.get("callbackUrl")) ?? "/";
  const singleProvider = React21.useMemo(() => (providers == null ? void 0 : providers.length) === 1, [providers]);
  const isOauthProvider = React21.useCallback((provider) => provider && provider !== "credentials" && provider !== "nodemailer" && provider !== "passkey", []);
  return (0, import_jsx_runtime23.jsx)(Box_default, {
    sx: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ...sx
    },
    children: (0, import_jsx_runtime23.jsx)(Container_default, {
      component: "main",
      maxWidth: "xs",
      children: (0, import_jsx_runtime23.jsxs)(Box_default, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 1,
          p: 4,
          border: "1px solid",
          borderColor: alpha(theme.palette.grey[400], 0.4),
          boxShadow: theme.shadows[4]
        },
        children: [branding == null ? void 0 : branding.logo, (slots == null ? void 0 : slots.title) ? (0, import_jsx_runtime23.jsx)(slots.title, {}) : (0, import_jsx_runtime23.jsx)(Typography_default, {
          variant: "h5",
          component: "h1",
          color: "textPrimary",
          sx: {
            my: theme.spacing(1),
            textAlign: "center",
            fontWeight: 600
          },
          children: typeof localeText.signInTitle === "string" ? localeText.signInTitle : localeText.signInTitle(branding == null ? void 0 : branding.title)
        }), (slots == null ? void 0 : slots.subtitle) ? (0, import_jsx_runtime23.jsx)(slots.subtitle, {}) : (0, import_jsx_runtime23.jsx)(Typography_default, {
          variant: "body2",
          color: "textSecondary",
          gutterBottom: true,
          textAlign: "center",
          children: localeText == null ? void 0 : localeText.signInSubtitle
        }), (0, import_jsx_runtime23.jsxs)(Box_default, {
          sx: {
            mt: theme.spacing(1),
            width: "100%"
          },
          children: [(0, import_jsx_runtime23.jsxs)(Stack_default, {
            spacing: 1,
            children: [error && isOauthProvider(selectedProviderId) ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              severity: "error",
              children: error
            }) : null, Object.values(providers ?? {}).filter((provider) => isOauthProvider(provider.id)).map((provider) => {
              return (0, import_jsx_runtime23.jsx)("form", {
                onSubmit: async (event) => {
                  event.preventDefault();
                  setFormStatus({
                    error: "",
                    selectedProviderId: provider.id,
                    loading: true
                  });
                  const oauthResponse = await (signIn == null ? void 0 : signIn(provider, void 0, callbackUrl));
                  setFormStatus((prev) => ({
                    ...prev,
                    loading: (oauthResponse == null ? void 0 : oauthResponse.error) ? false : prev.loading,
                    error: oauthResponse == null ? void 0 : oauthResponse.error
                  }));
                },
                ...slotProps == null ? void 0 : slotProps.form,
                children: (0, import_jsx_runtime23.jsx)(Button_default, {
                  variant: "outlined",
                  type: "submit",
                  fullWidth: true,
                  size: "large",
                  disableElevation: true,
                  name: "provider",
                  color: "inherit",
                  loading: loading && selectedProviderId === provider.id,
                  value: provider.id,
                  startIcon: IconProviderMap.get(provider.id),
                  sx: {
                    textTransform: "capitalize"
                  },
                  ...slotProps == null ? void 0 : slotProps.oAuthButton,
                  children: (0, import_jsx_runtime23.jsx)("span", {
                    children: localeText.providerSignInTitle(provider.name)
                  })
                }, provider.id)
              }, provider.id);
            })]
          }), passkeyProvider ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
            children: [singleProvider ? null : (0, import_jsx_runtime23.jsx)(Divider_default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: localeText.or
            }), error && selectedProviderId === "passkey" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
              component: "form",
              onSubmit: async (event) => {
                setFormStatus({
                  error: "",
                  selectedProviderId: passkeyProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const passkeyResponse = await (signIn == null ? void 0 : signIn(passkeyProvider, formData, callbackUrl));
                setFormStatus((prev) => ({
                  ...prev,
                  loading: false,
                  error: passkeyResponse == null ? void 0 : passkeyResponse.error
                }));
              },
              ...slotProps == null ? void 0 : slotProps.form,
              children: [(slots == null ? void 0 : slots.emailField) ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                ...slotProps == null ? void 0 : slotProps.emailField
              }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                ...getCommonTextFieldProps(theme, {
                  label: localeText.email,
                  placeholder: "your@email.com",
                  id: "email-passkey",
                  name: "email",
                  type: "email",
                  autoComplete: "email-webauthn",
                  autoFocus: singleProvider,
                  ...slotProps == null ? void 0 : slotProps.emailField
                })
              }), (slots == null ? void 0 : slots.submitButton) ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                ...slotProps == null ? void 0 : slotProps.submitButton
              }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                startIcon: IconProviderMap.get(passkeyProvider.id),
                color: "inherit",
                loading: loading && selectedProviderId === passkeyProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize"
                },
                ...slotProps == null ? void 0 : slotProps.submitButton,
                children: localeText.providerSignInTitle(passkeyProvider.name || localeText.passkey)
              })]
            })]
          }) : null, emailProvider ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
            children: [singleProvider ? null : (0, import_jsx_runtime23.jsx)(Divider_default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: localeText.or
            }), error && selectedProviderId === "nodemailer" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, success && selectedProviderId === "nodemailer" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              sx: {
                my: 2
              },
              severity: "success",
              children: success
            }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
              component: "form",
              onSubmit: async (event) => {
                event.preventDefault();
                setFormStatus({
                  error: "",
                  selectedProviderId: emailProvider.id,
                  loading: true
                });
                const formData = new FormData(event.currentTarget);
                const emailResponse = await (signIn == null ? void 0 : signIn(emailProvider, formData, callbackUrl));
                setFormStatus((prev) => ({
                  ...prev,
                  loading: false,
                  error: emailResponse == null ? void 0 : emailResponse.error,
                  success: emailResponse == null ? void 0 : emailResponse.success
                }));
              },
              ...slotProps == null ? void 0 : slotProps.form,
              children: [(slots == null ? void 0 : slots.emailField) ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                ...slotProps == null ? void 0 : slotProps.emailField
              }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                ...getCommonTextFieldProps(theme, {
                  label: localeText.email,
                  placeholder: "your@email.com",
                  name: "email",
                  id: "email-nodemailer",
                  type: "email",
                  autoComplete: "email-nodemailer",
                  autoFocus: singleProvider,
                  ...slotProps == null ? void 0 : slotProps.emailField
                })
              }), (slots == null ? void 0 : slots.submitButton) ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                ...slotProps == null ? void 0 : slotProps.submitButton
              }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "outlined",
                disableElevation: true,
                id: "submit-nodemailer",
                color: "inherit",
                loading: loading && selectedProviderId === emailProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize"
                },
                ...slotProps == null ? void 0 : slotProps.submitButton,
                children: localeText.providerSignInTitle((emailProvider.name || localeText.email).toLocaleLowerCase())
              })]
            })]
          }) : null, credentialsProvider ? (0, import_jsx_runtime23.jsxs)(React21.Fragment, {
            children: [singleProvider ? null : (0, import_jsx_runtime23.jsx)(Divider_default, {
              sx: {
                mt: 2,
                mx: 0,
                mb: 1
              },
              children: localeText.or
            }), error && selectedProviderId === "credentials" ? (0, import_jsx_runtime23.jsx)(Alert_default, {
              sx: {
                my: 2
              },
              severity: "error",
              children: error
            }) : null, (0, import_jsx_runtime23.jsxs)(Box_default, {
              component: "form",
              onSubmit: async (event) => {
                setFormStatus({
                  error: "",
                  selectedProviderId: credentialsProvider.id,
                  loading: true
                });
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const credentialsResponse = await (signIn == null ? void 0 : signIn(credentialsProvider, formData, callbackUrl));
                setFormStatus((prev) => ({
                  ...prev,
                  loading: false,
                  error: credentialsResponse == null ? void 0 : credentialsResponse.error
                }));
              },
              ...slotProps == null ? void 0 : slotProps.form,
              children: [(0, import_jsx_runtime23.jsxs)(Stack_default, {
                direction: "column",
                spacing: 2,
                sx: {
                  mb: 2
                },
                children: [(slots == null ? void 0 : slots.emailField) ? (0, import_jsx_runtime23.jsx)(slots.emailField, {
                  ...slotProps == null ? void 0 : slotProps.emailField
                }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                  ...getCommonTextFieldProps(theme, {
                    label: localeText.email,
                    placeholder: "your@email.com",
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    autoFocus: singleProvider,
                    ...slotProps == null ? void 0 : slotProps.emailField
                  })
                }), (slots == null ? void 0 : slots.passwordField) ? (0, import_jsx_runtime23.jsx)(slots.passwordField, {
                  ...slotProps == null ? void 0 : slotProps.passwordField
                }) : (0, import_jsx_runtime23.jsx)(TextField_default, {
                  ...getCommonTextFieldProps(theme, {
                    name: "password",
                    type: "password",
                    label: localeText.password,
                    id: "password",
                    placeholder: "*****",
                    autoComplete: "current-password",
                    ...slotProps == null ? void 0 : slotProps.passwordField
                  })
                })]
              }), (0, import_jsx_runtime23.jsxs)(Stack_default, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                spacing: 1,
                sx: {
                  justifyContent: "space-between"
                },
                children: [(slots == null ? void 0 : slots.rememberMe) ? (0, import_jsx_runtime23.jsx)(slots.rememberMe, {
                  ...slotProps == null ? void 0 : slotProps.rememberMe
                }) : (0, import_jsx_runtime23.jsx)(FormControlLabel_default, {
                  control: (0, import_jsx_runtime23.jsx)(Checkbox_default, {
                    name: "remember",
                    value: "true",
                    color: "primary",
                    sx: {
                      padding: 0.5,
                      "& .MuiSvgIcon-root": {
                        fontSize: 20
                      }
                    }
                  }),
                  label: localeText.signInRememberMe,
                  ...slotProps == null ? void 0 : slotProps.rememberMe,
                  slotProps: {
                    typography: {
                      color: "textSecondary",
                      fontSize: theme.typography.pxToRem(14)
                    },
                    ...(_a = slotProps == null ? void 0 : slotProps.rememberMe) == null ? void 0 : _a.slotProps
                  }
                }), (slots == null ? void 0 : slots.forgotPasswordLink) ? (0, import_jsx_runtime23.jsx)(slots.forgotPasswordLink, {
                  ...slotProps == null ? void 0 : slotProps.forgotPasswordLink
                }) : null]
              }), (slots == null ? void 0 : slots.submitButton) ? (0, import_jsx_runtime23.jsx)(slots.submitButton, {
                ...slotProps == null ? void 0 : slotProps.submitButton
              }) : (0, import_jsx_runtime23.jsx)(Button_default, {
                type: "submit",
                fullWidth: true,
                size: "large",
                variant: "contained",
                disableElevation: true,
                color: "primary",
                loading: loading && selectedProviderId === credentialsProvider.id,
                sx: {
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize"
                },
                ...slotProps == null ? void 0 : slotProps.submitButton,
                children: localeText.providerSignInTitle((credentialsProvider.name || localeText.password).toLocaleLowerCase())
              }), (slots == null ? void 0 : slots.signUpLink) ? (0, import_jsx_runtime23.jsx)(Box_default, {
                sx: {
                  display: "flex",
                  justifyContent: "center"
                },
                children: (slots == null ? void 0 : slots.signUpLink) ? (0, import_jsx_runtime23.jsx)(slots.signUpLink, {
                  ...slotProps == null ? void 0 : slotProps.signUpLink
                }) : null
              }) : null]
            })]
          }) : null]
        })]
      })
    })
  });
}
true ? SignInPage.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The labels for the account component.
   */
  localeText: import_prop_types.default.object,
  /**
   * The list of authentication providers to display.
   * @default []
   */
  providers: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    id: import_prop_types.default.string.isRequired,
    name: import_prop_types.default.string.isRequired
  })),
  /**
   * Callback fired when a user signs in.
   * @param {AuthProvider} provider The authentication provider.
   * @param {FormData} formData The form data if the provider id is 'credentials'.\
   * @param {string} callbackUrl The URL to redirect to after signing in.
   * @returns {void|Promise<AuthResponse>}
   * @default undefined
   */
  signIn: import_prop_types.default.func,
  /**
   * The props used for each slot inside.
   * @default {}
   * @example { emailField: { autoFocus: false } }
   * @example { passwordField: { variant: 'outlined' } }
   * @example { emailField: { autoFocus: false }, passwordField: { variant: 'outlined' } }
   */
  slotProps: import_prop_types.default.shape({
    emailField: import_prop_types.default.object,
    forgotPasswordLink: import_prop_types.default.object,
    form: import_prop_types.default.object,
    oAuthButton: import_prop_types.default.object,
    passwordField: import_prop_types.default.object,
    rememberMe: import_prop_types.default.object,
    signUpLink: import_prop_types.default.object,
    submitButton: import_prop_types.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   * @example { forgotPasswordLink: <Link href="/forgot-password">Forgot password?</Link> }
   * @example { signUpLink: <Link href="/sign-up">Sign up</Link> }
   */
  slots: import_prop_types.default.shape({
    emailField: import_prop_types.default.elementType,
    forgotPasswordLink: import_prop_types.default.elementType,
    passwordField: import_prop_types.default.elementType,
    rememberMe: import_prop_types.default.elementType,
    signUpLink: import_prop_types.default.elementType,
    submitButton: import_prop_types.default.elementType,
    subtitle: import_prop_types.default.elementType,
    title: import_prop_types.default.elementType
  }),
  /**
   * The prop used to customize the styles on the `SignInPage` container
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
export {
  SignInPage
};
//# sourceMappingURL=@toolpad_core_SignInPage.js.map
