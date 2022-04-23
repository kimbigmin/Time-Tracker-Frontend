export interface OneDate {
  id: number;
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
}

export type AllDate = OneDate[];

export type DateAction = {
  type: string;
  date: OneDate;
};

export type DispatchType = (args: DateAction) => DateAction;
