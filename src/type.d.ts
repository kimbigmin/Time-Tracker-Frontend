export interface OneDay {
  _id: string;
  author: string;
  shortId: string;
  date: string;
  improve: {
    [key: string]: string;
  };
  private: {
    [key: string]: string;
  };
  sleeping: {
    [key: string]: string;
  };
  working: {
    [key: string]: string;
  };
  entireTime: {
    [key: string]: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type AllDates = OneDay[];

export type EachTime = {
  [key: string]: string;
};

export type SumTime = {
  [key: string]: number;
};

export type DateAction = {
  type: string;
  date: OneDay;
};

export type DispatchType = (args: DateAction) => DateAction;
