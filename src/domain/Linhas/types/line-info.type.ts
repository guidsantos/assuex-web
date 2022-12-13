export interface ILineInfo {
  id: number;
  name: string;
  coordName?: string;
  startPoint?: string;
  endPoint?: string;
  bus?: string;
  driver?: {
    company: string;
    name: string;
  };
  stopPoints: IStopPoint[];
}

export interface IStopPoint {
  address: string;
  reference: string | null;
  stop_time: string;
}

export interface ICreateLine {
  name: string;
  coordName: string;
  driverId: number;
  startPoint?: string;
  endPoint?: string;
  bus?: string;
}

export interface IUpdateLine {
  id: number;
  name?: string;
  coordName?: string;
  driverId?: number;
  startPoin?: string;
  endPoint?: string;
  bus?: string;
}
