import { fn3 } from "./typesMetod";

export {};

declare global {
  interface Array<T> {
    yoMap(callback: fn3): T[];
  }
}
