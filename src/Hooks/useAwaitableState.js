const {
  useState,
  useEffect,
  useRef,
  useDebugValue,
  useCallback,
} = require('react');

export default function useAwaitableState(defaultValue, debugValue = '') {
  const resolverFunction = useRef(null);
  const valueRef = useRef(defaultValue);
  const [value, setValue] = useState(defaultValue);
  useDebugValue(debugValue);
  useEffect(() => {
    if (resolverFunction.current) {
      valueRef.current = value;
      resolverFunction.current(value);
    }
  }, [value]);
  const awaitableSetter = useCallback((newValueOrFunction) => {
    return new Promise((resolve) => {
      // if two consecutive setState are called
      // but the first one did not have time to resolve before the second one is requested,
      // resolve it now, otherwise the first will never be resolved
      if (resolverFunction.current) {
        resolverFunction.current();
      }
      resolverFunction.current = resolve;
      setValue(newValueOrFunction);
    });
  }, []);
  return [value, awaitableSetter, valueRef];
}
