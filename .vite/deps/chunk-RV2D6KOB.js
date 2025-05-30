import {
  require_jsx_runtime,
  require_prop_types,
  useTheme
} from "./chunk-32EPLIDQ.js";
import {
  __toESM,
  require_react
} from "./chunk-VCDLJVZS.js";

// node_modules/@toolpad/core/esm/AppProvider/LocalizationProvider.js
var React = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/@toolpad/core/esm/locales/getLocalization.js
var getLocalization = (translations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: {
            ...translations
          }
        }
      }
    }
  };
};

// node_modules/@toolpad/core/esm/locales/en.js
var en = {
  // Account
  accountSignInLabel: "Sign In",
  accountSignOutLabel: "Sign Out",
  // AccountPreview
  accountPreviewTitle: "Account",
  accountPreviewIconButtonLabel: "Current User",
  // SignInPage
  signInTitle: (brandingTitle) => brandingTitle ? `Sign in to ${brandingTitle}` : "Sign in",
  signInSubtitle: "Welcome user, please sign in to continue",
  signInRememberMe: "Remember Me",
  providerSignInTitle: (provider) => `Sign in with ${provider}`,
  // Common authentication labels
  email: "Email",
  password: "Password",
  username: "Username",
  passkey: "Passkey",
  // Common action labels
  save: "Save",
  cancel: "Cancel",
  ok: "Ok",
  or: "Or",
  to: "To",
  with: "With",
  close: "Close",
  delete: "Delete",
  alert: "Alert",
  confirm: "Confirm",
  loading: "Loading...",
  // CRUD
  createNewButtonLabel: "Create new",
  reloadButtonLabel: "Reload data",
  createLabel: "Create",
  createSuccessMessage: "Item created successfully.",
  createErrorMessage: "Failed to create item. Reason:",
  editLabel: "Edit",
  editSuccessMessage: "Item edited successfully.",
  editErrorMessage: "Failed to edit item. Reason:",
  deleteLabel: "Delete",
  deleteConfirmTitle: "Delete item?",
  deleteConfirmMessage: "Do you wish to delete this item?",
  deleteConfirmLabel: "Delete",
  deleteCancelLabel: "Cancel",
  deleteSuccessMessage: "Item deleted successfully.",
  deleteErrorMessage: "Failed to delete item. Reason:",
  deletedItemMessage: "This item has been deleted."
};
var en_default = getLocalization(en);

// node_modules/@toolpad/core/esm/AppProvider/LocalizationProvider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var LocalizationContext = React.createContext({});
var LocalizationProvider = function LocalizationProvider2(props) {
  var _a, _b, _c;
  const {
    localeText: propsLocaleText,
    children
  } = props;
  const theme = useTheme();
  const themeLocaleText = (_c = (_b = (_a = theme == null ? void 0 : theme.components) == null ? void 0 : _a.MuiLocalizationProvider) == null ? void 0 : _b.defaultProps) == null ? void 0 : _c.localeText;
  const defaultLocaleText = en_default.components.MuiLocalizationProvider.defaultProps.localeText;
  const localeText = React.useMemo(() => ({
    ...defaultLocaleText,
    ...themeLocaleText,
    ...propsLocaleText
  }), [defaultLocaleText, themeLocaleText, propsLocaleText]);
  return (0, import_jsx_runtime.jsx)(LocalizationContext.Provider, {
    value: localeText,
    children
  });
};
true ? LocalizationProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Locale for components texts
   */
  localeText: import_prop_types.default.object
} : void 0;
function useLocaleText() {
  return React.useContext(LocalizationContext);
}

// node_modules/@toolpad/core/esm/shared/context.js
var React2 = __toESM(require_react(), 1);
var BrandingContext = React2.createContext(null);
var NavigationContext = React2.createContext([]);
var PaletteModeContext = React2.createContext({
  paletteMode: "light",
  setPaletteMode: () => {
  },
  isDualTheme: false
});
var RouterContext = React2.createContext(null);
var WindowContext = React2.createContext(void 0);
var CrudContext = React2.createContext({
  dataSource: null,
  dataSourceCache: null
});

export {
  LocalizationContext,
  LocalizationProvider,
  useLocaleText,
  BrandingContext,
  NavigationContext,
  PaletteModeContext,
  RouterContext,
  WindowContext
};
//# sourceMappingURL=chunk-RV2D6KOB.js.map
