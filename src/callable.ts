export type Callback = () => any;

export function invokeCallback(callable?: Callback) {
  return callable?.();
}