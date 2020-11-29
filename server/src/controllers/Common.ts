// requires status and exactly one of {data, message}
export type ReturnObj = {
  status: number;
} & (
  | {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any;
      message?: undefined;
    }
  | {
      data?: undefined;
      message: string;
    }
);
