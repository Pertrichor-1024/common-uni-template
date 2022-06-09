declare namespace UniApp {
  export interface Event {
    detail: Record<string, any>;
    mp: Record<string, any>;
    currentTarget: Record<string, any>;
    target: Record<string, any>;
    timeStamp: number;
    type: string;
  }
}
