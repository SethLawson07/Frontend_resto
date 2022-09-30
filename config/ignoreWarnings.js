import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "EventEmitter.removeListener",
    "[fuego-swr-keys-from-collection-path]",
    "Setting a timer for a long period of time",
    "ViewPropTypes will be removed from React Native",
    "AsyncStorage has been extracted from react-native",
    "exported from 'deprecated-react-native-prop-types'.",
    "Non-serializable values were found in the navigation state.",
    "VirtualizedLists should never be nested inside plain ScrollViews",
    "Got a component with the name 'resetPassword' for the screen 'Reset'",
    " Can't perform a React state update on an unmounted component.",
    "Found screens with the same name nested inside one another. Check:",
    "Failed %s type: %s%s, prop, Invalid props.style key `size` supplied to `Text`",
    "please report excessive number of pending callbacks 501",
    "The action 'NAVIGATE' with payload {} was not handled by any navigator.",
    "Cannot connect to Metro",
    "metro and the client are out of sync. reload to reconnect",
    "Each child in a list should have a unique key prop.%s%s See https://reactjs.org/link/warning-keys for more information.%s,",
    "undefined Unable to resolve module react-native-svg from S:\PROJET\InPharma\node_modules\react-native-multi-selectbox\src\components\Icon.js: react-native-svg could not be found within the project or in these directories",
    "Please report: Excessive number of pending callbacks: 501. Some pending callbacks that might have leaked by never being called from native code: {}",
    "[Unhandled promise rejection: TypeError: undefined is not an object (evaluating 'selectedItems.length')]",
    "[Unhandled promise rejection: TypeError: undefined is not an object (evaluating 'selectedItems.length')]",
    "Encountered two children with the same key, `:`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}