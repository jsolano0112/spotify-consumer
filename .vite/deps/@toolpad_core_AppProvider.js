import {
  BrandingContext,
  LocalizationContext,
  LocalizationProvider,
  NavigationContext,
  PaletteModeContext,
  RouterContext,
  WindowContext,
  useLocaleText
} from "./chunk-RV2D6KOB.js";
import {
  Badge_default,
  CssBaseline_default,
  SnackbarContent_default,
  Snackbar_default,
  useMediaQuery_default
} from "./chunk-G6GIL5IO.js";
import {
  Alert_default,
  Button_default,
  IconButton_default
} from "./chunk-JA77F7RF.js";
import {
  createSvgIcon
} from "./chunk-77LRWX3W.js";
import {
  InitColorSchemeScript_default,
  ThemeProvider,
  useColorScheme
} from "./chunk-DPC33NHT.js";
import {
  createTheme,
  require_jsx_runtime,
  require_prop_types,
  require_react_is,
  useEventCallback_default,
  useSlotProps_default
} from "./chunk-32EPLIDQ.js";
import "./chunk-WEJJOBXA.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-VCDLJVZS.js";

// node_modules/invariant/browser.js
var require_browser = __commonJS({
  "node_modules/invariant/browser.js"(exports, module) {
    "use strict";
    var invariant4 = function(condition, format, a, b, c, d, e, f) {
      if (true) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module.exports = invariant4;
  }
});

// node_modules/@toolpad/core/esm/AppProvider/AppProvider.js
var React10 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@toolpad/core/esm/useNotifications/useNotifications.js
var React2 = __toESM(require_react(), 1);

// node_modules/@toolpad/core/esm/useNotifications/NotificationsContext.js
var React = __toESM(require_react(), 1);
var NotificationsContext = React.createContext(null);

// node_modules/@toolpad/core/esm/useNotifications/NotificationsProvider.js
var React4 = __toESM(require_react(), 1);

// node_modules/@mui/icons-material/esm/Close.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Close_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");

// node_modules/@toolpad/utils/esm/react.js
var React3 = __toESM(require_react());
var ReactIs = __toESM(require_react_is());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
function useNonNullableContext(context, name) {
  const maybeContext = React3.useContext(context);
  if (maybeContext === null || maybeContext === void 0) {
    throw new Error(`context "${name}" was used without a Provider`);
  }
  return maybeContext;
}

// node_modules/@toolpad/core/esm/useNotifications/NotificationsProvider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var _CloseIcon;
var RootPropsContext = React4.createContext(null);
var defaultLocaleText = {
  close: "Close"
};
function Notification({
  notificationKey,
  open,
  message,
  options,
  badge
}) {
  var _a, _b;
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText,
    ...globalLocaleText
  };
  const {
    close
  } = useNonNullableContext(NotificationsContext);
  const {
    severity,
    actionText,
    onAction,
    autoHideDuration
  } = options;
  const handleClose = React4.useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    close(notificationKey);
  }, [notificationKey, close]);
  const action = (0, import_jsx_runtime3.jsxs)(React4.Fragment, {
    children: [onAction ? (0, import_jsx_runtime3.jsx)(Button_default, {
      color: "inherit",
      size: "small",
      onClick: onAction,
      children: actionText ?? "Action"
    }) : null, (0, import_jsx_runtime3.jsx)(IconButton_default, {
      size: "small",
      "aria-label": localeText == null ? void 0 : localeText.close,
      title: localeText == null ? void 0 : localeText.close,
      color: "inherit",
      onClick: handleClose,
      children: _CloseIcon || (_CloseIcon = (0, import_jsx_runtime3.jsx)(Close_default, {
        fontSize: "small"
      }))
    })]
  });
  const props = React4.useContext(RootPropsContext);
  const SnackbarComponent = ((_a = props == null ? void 0 : props.slots) == null ? void 0 : _a.snackbar) ?? Snackbar_default;
  const snackbarSlotProps = useSlotProps_default({
    elementType: SnackbarComponent,
    ownerState: props,
    externalSlotProps: (_b = props == null ? void 0 : props.slotProps) == null ? void 0 : _b.snackbar,
    additionalProps: {
      open,
      autoHideDuration,
      onClose: handleClose,
      action
    }
  });
  return (0, import_jsx_runtime3.jsx)(SnackbarComponent, {
    ...snackbarSlotProps,
    children: (0, import_jsx_runtime3.jsx)(Badge_default, {
      badgeContent: badge,
      color: "primary",
      sx: {
        width: "100%"
      },
      children: severity ? (0, import_jsx_runtime3.jsx)(Alert_default, {
        severity,
        sx: {
          width: "100%"
        },
        action,
        children: message
      }) : (0, import_jsx_runtime3.jsx)(SnackbarContent_default, {
        message,
        action
      })
    })
  }, notificationKey);
}
function Notifications({
  state
}) {
  const currentNotification = state.queue[0] ?? null;
  return currentNotification ? (0, import_jsx_runtime3.jsx)(Notification, {
    ...currentNotification,
    badge: state.queue.length > 1 ? String(state.queue.length) : null
  }) : null;
}
var nextId = 0;
var generateId = () => {
  const id = nextId;
  nextId += 1;
  return id;
};
function NotificationsProvider(props) {
  const {
    children
  } = props;
  const [state, setState] = React4.useState({
    queue: []
  });
  const show = React4.useCallback((message, options = {}) => {
    const notificationKey = options.key ?? `::toolpad-internal::notification::${generateId()}`;
    setState((prev) => {
      if (prev.queue.some((n) => n.notificationKey === notificationKey)) {
        return prev;
      }
      return {
        ...prev,
        queue: [...prev.queue, {
          message,
          options,
          notificationKey,
          open: true
        }]
      };
    });
    return notificationKey;
  }, []);
  const close = React4.useCallback((key) => {
    setState((prev) => ({
      ...prev,
      queue: prev.queue.filter((n) => n.notificationKey !== key)
    }));
  }, []);
  const contextValue = React4.useMemo(() => ({
    show,
    close
  }), [show, close]);
  return (0, import_jsx_runtime3.jsx)(RootPropsContext.Provider, {
    value: props,
    children: (0, import_jsx_runtime3.jsxs)(NotificationsContext.Provider, {
      value: contextValue,
      children: [children, (0, import_jsx_runtime3.jsx)(Notifications, {
        state
      })]
    })
  });
}

// node_modules/@toolpad/core/esm/useDialogs/useDialogs.js
var import_invariant = __toESM(require_browser(), 1);
var React6 = __toESM(require_react(), 1);

// node_modules/@toolpad/core/esm/useDialogs/DialogsContext.js
var React5 = __toESM(require_react(), 1);
var DialogsContext = React5.createContext(null);

// node_modules/@toolpad/core/esm/useDialogs/useDialogs.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);

// node_modules/@toolpad/core/esm/useDialogs/DialogsProvider.js
var import_invariant2 = __toESM(require_browser(), 1);
var React7 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function DialogsProvider(props) {
  const {
    children,
    unmountAfter = 1e3
  } = props;
  const [stack, setStack] = React7.useState([]);
  const keyPrefix = React7.useId();
  const nextId2 = React7.useRef(0);
  const requestDialog = useEventCallback_default(function open(Component, payload, options = {}) {
    const {
      onClose = async () => {
      }
    } = options;
    let resolve;
    const promise = new Promise((resolveImpl) => {
      resolve = resolveImpl;
    });
    (0, import_invariant2.default)(resolve, "resolve not set");
    const key = `${keyPrefix}-${nextId2.current}`;
    nextId2.current += 1;
    const newEntry = {
      key,
      open: true,
      promise,
      Component,
      payload,
      onClose,
      resolve
    };
    setStack((prevStack) => [...prevStack, newEntry]);
    return promise;
  });
  const closeDialogUi = useEventCallback_default(function closeDialogUi2(dialog) {
    setStack((prevStack) => prevStack.map((entry) => entry.promise === dialog ? {
      ...entry,
      open: false
    } : entry));
    setTimeout(() => {
      setStack((prevStack) => prevStack.filter((entry) => entry.promise !== dialog));
    }, unmountAfter);
  });
  const closeDialog = useEventCallback_default(async function closeDialog2(dialog, result) {
    const entryToClose = stack.find((entry) => entry.promise === dialog);
    (0, import_invariant2.default)(entryToClose, "dialog not found");
    await entryToClose.onClose(result);
    entryToClose.resolve(result);
    closeDialogUi(dialog);
    return dialog;
  });
  const contextValue = React7.useMemo(() => ({
    open: requestDialog,
    close: closeDialog
  }), [requestDialog, closeDialog]);
  return (0, import_jsx_runtime5.jsxs)(DialogsContext.Provider, {
    value: contextValue,
    children: [children, stack.map(({
      key,
      open,
      Component,
      payload,
      promise
    }) => (0, import_jsx_runtime5.jsx)(Component, {
      payload,
      open,
      onClose: async (result) => {
        await closeDialog(promise, result);
      }
    }, key))]
  });
}

// node_modules/@toolpad/core/esm/AppProvider/AppThemeProvider.js
var React9 = __toESM(require_react(), 1);
var import_invariant3 = __toESM(require_browser(), 1);

// node_modules/@toolpad/core/esm/persistence/useStorageState.js
var React8 = __toESM(require_react(), 1);

// node_modules/@toolpad/core/esm/persistence/codec.js
var CODEC_STRING = {
  parse: (value) => value,
  stringify: (value) => value
};

// node_modules/@toolpad/core/esm/persistence/useStorageState.js
var currentTabChangeListeners = /* @__PURE__ */ new Map();
function onCurrentTabStorageChange(key, handler) {
  let listeners = currentTabChangeListeners.get(key);
  if (!listeners) {
    listeners = /* @__PURE__ */ new Set();
    currentTabChangeListeners.set(key, listeners);
  }
  listeners.add(handler);
}
function offCurrentTabStorageChange(key, handler) {
  const listeners = currentTabChangeListeners.get(key);
  if (!listeners) {
    return;
  }
  listeners.delete(handler);
  if (listeners.size === 0) {
    currentTabChangeListeners.delete(key);
  }
}
function emitCurrentTabStorageChange(key) {
  const listeners = currentTabChangeListeners.get(key);
  if (listeners) {
    listeners.forEach((listener) => listener());
  }
}
if (typeof window !== "undefined") {
  const origSetItem = window.localStorage.setItem;
  window.localStorage.setItem = function setItem(key, value) {
    const result = origSetItem.call(this, key, value);
    emitCurrentTabStorageChange(key);
    return result;
  };
}
function subscribe(area, key, callback) {
  if (!key) {
    return () => {
    };
  }
  const storageHandler = (event) => {
    if (event.storageArea === area && event.key === key) {
      callback();
    }
  };
  window.addEventListener("storage", storageHandler);
  onCurrentTabStorageChange(key, callback);
  return () => {
    window.removeEventListener("storage", storageHandler);
    offCurrentTabStorageChange(key, callback);
  };
}
function getSnapshot(area, key) {
  if (!key) {
    return null;
  }
  try {
    return area.getItem(key);
  } catch {
    return null;
  }
}
function setValue(area, key, value) {
  if (!key) {
    return;
  }
  try {
    if (value === null) {
      area.removeItem(key);
    } else {
      area.setItem(key, String(value));
    }
  } catch {
    return;
  }
  emitCurrentTabStorageChange(key);
}
var serverValue = [null, () => {
}];
function useStorageStateServer() {
  return serverValue;
}
function encode(codec, value) {
  return value === null ? null : codec.stringify(value);
}
function decode(codec, value) {
  return value === null ? null : codec.parse(value);
}
var getKeyServerSnapshot = () => null;
function useStorageState(area, key, initializer = null, options) {
  const codec = (options == null ? void 0 : options.codec) ?? CODEC_STRING;
  const [initialValue] = React8.useState(initializer);
  const encodedInitialValue = React8.useMemo(() => encode(codec, initialValue), [codec, initialValue]);
  const subscribeKey = React8.useCallback((callback) => subscribe(area, key, callback), [area, key]);
  const getKeySnapshot = React8.useCallback(() => getSnapshot(area, key) ?? encodedInitialValue, [area, encodedInitialValue, key]);
  const encodedStoredValue = React8.useSyncExternalStore(subscribeKey, getKeySnapshot, getKeyServerSnapshot);
  const storedValue = React8.useMemo(() => decode(codec, encodedStoredValue), [codec, encodedStoredValue]);
  const setStoredValue = React8.useCallback((value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    const encodedValueToStore = encode(codec, valueToStore);
    setValue(area, key, encodedValueToStore);
  }, [area, codec, storedValue, key]);
  const [nonStoredValue, setNonStoredValue] = React8.useState(initialValue);
  if (!key) {
    return [nonStoredValue, setNonStoredValue];
  }
  return [storedValue, setStoredValue];
}

// node_modules/@toolpad/core/esm/useLocalStorageState/useLocalStorageState.js
var useLocalStorageStateBrowser = (...args) => useStorageState(window.localStorage, ...args);
var useLocalStorageState = typeof window === "undefined" ? useStorageStateServer : useLocalStorageStateBrowser;

// node_modules/@toolpad/core/esm/AppProvider/AppThemeProvider.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _CssBaseline;
var _InitColorSchemeScrip;
var _CssBaseline2;
var COLOR_SCHEME_ATTRIBUTE = "data-toolpad-color-scheme";
var COLOR_SCHEME_STORAGE_KEY = "toolpad-color-scheme";
var MODE_STORAGE_KEY = "toolpad-mode";
function usePreferredMode(window2) {
  const prefersDarkMode = useMediaQuery_default("(prefers-color-scheme: dark)", window2 && {
    matchMedia: window2.matchMedia
  });
  return prefersDarkMode ? "dark" : "light";
}
function isCssVarsTheme(theme) {
  return "vars" in theme;
}
function LegacyThemeProvider(props) {
  const {
    children,
    theme,
    window: appWindow
  } = props;
  (0, import_invariant3.default)(!isCssVarsTheme(theme), "This provider only accepts legacy themes.");
  const isDualTheme = "light" in theme || "dark" in theme;
  const preferredMode = usePreferredMode(appWindow);
  const [userMode, setUserMode] = useLocalStorageState(MODE_STORAGE_KEY, "system");
  const paletteMode = !userMode || userMode === "system" ? preferredMode : userMode;
  const dualAwareTheme = React9.useMemo(() => isDualTheme ? theme[paletteMode === "dark" ? "dark" : "light"] ?? theme[paletteMode === "dark" ? "light" : "dark"] : theme, [isDualTheme, paletteMode, theme]);
  const paletteModeContextValue = React9.useMemo(() => ({
    paletteMode,
    setPaletteMode: setUserMode,
    isDualTheme
  }), [isDualTheme, paletteMode, setUserMode]);
  return (0, import_jsx_runtime6.jsx)(ThemeProvider, {
    theme: dualAwareTheme,
    children: (0, import_jsx_runtime6.jsxs)(PaletteModeContext.Provider, {
      value: paletteModeContextValue,
      children: [_CssBaseline || (_CssBaseline = (0, import_jsx_runtime6.jsx)(CssBaseline_default, {
        enableColorScheme: true
      })), children]
    })
  });
}
function CssVarsPaletteModeProvider(props) {
  const {
    children,
    window: appWindow
  } = props;
  const preferredMode = usePreferredMode(appWindow);
  const {
    mode,
    setMode,
    allColorSchemes
  } = useColorScheme();
  const paletteModeContextValue = React9.useMemo(() => {
    return {
      paletteMode: !mode || mode === "system" ? preferredMode : mode,
      setPaletteMode: setMode,
      isDualTheme: allColorSchemes.length > 1
    };
  }, [allColorSchemes, mode, preferredMode, setMode]);
  return (0, import_jsx_runtime6.jsx)(PaletteModeContext.Provider, {
    value: paletteModeContextValue,
    children
  });
}
function CssVarsThemeProvider(props) {
  const {
    children,
    theme,
    window: appWindow
  } = props;
  (0, import_invariant3.default)(isCssVarsTheme(theme), "This provider only accepts CSS vars themes.");
  return (0, import_jsx_runtime6.jsxs)(ThemeProvider, {
    theme,
    documentNode: appWindow == null ? void 0 : appWindow.document,
    colorSchemeNode: appWindow == null ? void 0 : appWindow.document.documentElement,
    disableNestedContext: true,
    colorSchemeStorageKey: COLOR_SCHEME_STORAGE_KEY,
    modeStorageKey: MODE_STORAGE_KEY,
    children: [_InitColorSchemeScrip || (_InitColorSchemeScrip = (0, import_jsx_runtime6.jsx)(InitColorSchemeScript_default, {
      attribute: COLOR_SCHEME_ATTRIBUTE,
      colorSchemeStorageKey: COLOR_SCHEME_STORAGE_KEY,
      modeStorageKey: MODE_STORAGE_KEY
    })), (0, import_jsx_runtime6.jsxs)(CssVarsPaletteModeProvider, {
      window: appWindow,
      children: [_CssBaseline2 || (_CssBaseline2 = (0, import_jsx_runtime6.jsx)(CssBaseline_default, {
        enableColorScheme: true
      })), children]
    })]
  });
}
function AppThemeProvider(props) {
  const {
    children,
    theme,
    ...rest
  } = props;
  const useCssVarsProvider = isCssVarsTheme(theme);
  return useCssVarsProvider ? (0, import_jsx_runtime6.jsx)(CssVarsThemeProvider, {
    theme,
    ...rest,
    children
  }) : (0, import_jsx_runtime6.jsx)(LegacyThemeProvider, {
    theme,
    ...rest,
    children
  });
}

// node_modules/@toolpad/core/esm/AppProvider/AppProvider.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AuthenticationContext = React10.createContext(null);
var SessionContext = React10.createContext(null);
function createTheme2() {
  return createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme"
    },
    colorSchemes: {
      dark: true
    }
  });
}
function AppProvider(props) {
  const {
    children,
    theme = createTheme2(),
    branding = null,
    navigation = [],
    localeText,
    router = null,
    authentication = null,
    session = null,
    window: appWindow
  } = props;
  return (0, import_jsx_runtime7.jsx)(WindowContext.Provider, {
    value: appWindow,
    children: (0, import_jsx_runtime7.jsx)(AuthenticationContext.Provider, {
      value: authentication,
      children: (0, import_jsx_runtime7.jsx)(SessionContext.Provider, {
        value: session,
        children: (0, import_jsx_runtime7.jsx)(RouterContext.Provider, {
          value: router,
          children: (0, import_jsx_runtime7.jsx)(AppThemeProvider, {
            theme,
            window: appWindow,
            children: (0, import_jsx_runtime7.jsx)(LocalizationProvider, {
              localeText,
              children: (0, import_jsx_runtime7.jsx)(NotificationsProvider, {
                children: (0, import_jsx_runtime7.jsx)(DialogsProvider, {
                  children: (0, import_jsx_runtime7.jsx)(BrandingContext.Provider, {
                    value: branding,
                    children: (0, import_jsx_runtime7.jsx)(NavigationContext.Provider, {
                      value: navigation,
                      children
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
}
true ? AppProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Authentication methods.
   * @default null
   */
  authentication: import_prop_types.default.shape({
    signIn: import_prop_types.default.func.isRequired,
    signOut: import_prop_types.default.func.isRequired
  }),
  /**
   * Branding options for the app.
   * @default null
   */
  branding: import_prop_types.default.shape({
    homeUrl: import_prop_types.default.string,
    logo: import_prop_types.default.node,
    title: import_prop_types.default.string
  }),
  /**
   * The content of the app provider.
   */
  children: import_prop_types.default.node,
  /**
   * Locale text for components
   */
  localeText: import_prop_types.default.object,
  /**
   * Navigation definition for the app. [Find out more](https://mui.com/toolpad/core/react-app-provider/#navigation).
   * @default []
   */
  navigation: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.shape({
    action: import_prop_types.default.node,
    children: import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.shape({
      kind: import_prop_types.default.oneOf(["header"]).isRequired,
      title: import_prop_types.default.string.isRequired
    }), import_prop_types.default.shape({
      kind: import_prop_types.default.oneOf(["divider"]).isRequired
    })]).isRequired),
    icon: import_prop_types.default.node,
    kind: import_prop_types.default.oneOf(["page"]),
    pattern: import_prop_types.default.string,
    segment: import_prop_types.default.string,
    title: import_prop_types.default.string
  }), import_prop_types.default.shape({
    kind: import_prop_types.default.oneOf(["header"]).isRequired,
    title: import_prop_types.default.string.isRequired
  }), import_prop_types.default.shape({
    kind: import_prop_types.default.oneOf(["divider"]).isRequired
  })]).isRequired),
  /**
   * Router implementation used inside Toolpad components.
   * @default null
   */
  router: import_prop_types.default.shape({
    Link: import_prop_types.default.func,
    navigate: import_prop_types.default.func.isRequired,
    pathname: import_prop_types.default.string.isRequired,
    searchParams: import_prop_types.default.instanceOf(URLSearchParams).isRequired
  }),
  /**
   * Session info about the current user.
   * @default null
   */
  session: import_prop_types.default.shape({
    user: import_prop_types.default.shape({
      email: import_prop_types.default.string,
      id: import_prop_types.default.string,
      image: import_prop_types.default.string,
      name: import_prop_types.default.string
    })
  }),
  /**
   * [Theme or themes](https://mui.com/toolpad/core/react-app-provider/#theming) to be used by the app in light/dark mode. A [CSS variables theme](https://mui.com/material-ui/customization/css-theme-variables/overview/) is recommended.
   * @default createTheme()
   */
  theme: import_prop_types.default.object,
  /**
   * The window where the application is rendered.
   * This is needed when rendering the app inside an iframe, for example.
   * @default window
   */
  window: import_prop_types.default.object
} : void 0;
export {
  AppProvider,
  AuthenticationContext,
  LocalizationContext,
  LocalizationProvider,
  SessionContext,
  useLocaleText
};
//# sourceMappingURL=@toolpad_core_AppProvider.js.map
