import { AxiosResponse } from "axios";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLocation, useParams } from "react-router-dom";
import api from "../../../common/infra/services/api";
import {
  ICreateLine,
  ILineInfo,
  IStopPoint,
  IUpdateLine,
} from "../types/line-info.type";

interface LineContextData {
  addLine(data: ICreateLine): void;
  updateLine(data: IUpdateLine): void;
  getLineData(): ILineInfo;
  getAllLines(): ILineInfo[];
  getUpdateLinesData(): ILineInfo[];
  getModalVisible(): boolean;
  setModalVisible(): void;
  setUpdateLinesData(data: ILineInfo[]): void;
}

interface Props {
  children: React.ReactNode;
}

const LineContext = createContext<LineContextData>({} as LineContextData);

const LineProvider: React.FC<Props> = ({ children }) => {
  const { id } = useParams();

  const [modalVisible, sModalVisible] = useState(false);
  const [allLinesData, sAllLinesData] = useState([] as ILineInfo[]);
  const [updateLinesData, sUpdateLinesData] = useState([] as ILineInfo[]);
  const [lineData, setLineData] = useState({
    id: 1,
    name: "Not found",
    stopPoints: [{ address: "", reference: "", stop_time: "" }],
  } as ILineInfo);

  const getAllLines = useCallback(() => allLinesData, [allLinesData]);
  const getLineData = useCallback(() => lineData, [lineData]);
  const getUpdateLinesData = useCallback(() => updateLinesData, [
    updateLinesData,
  ]);
  const getModalVisible = useCallback(() => modalVisible, [modalVisible]);

  const setModalVisible = useCallback(() => sModalVisible(!modalVisible), [
    modalVisible,
  ]);

  const setUpdateLinesData = useCallback(
    (data: ILineInfo[]) => sUpdateLinesData(data),
    [updateLinesData]
  );

  const addLine = async (data: ICreateLine) => {
    await api.post("/line", data);
  };

  const updateLine = async (data: IUpdateLine) => {
    await api.put("/line", data);
  };

  const fetchGetLineData = async () => {
    const apiResponse = await api.get("/line", {
      params: { id: id || 1 },
    });
    if (!!apiResponse.data) setLineData(apiResponse.data);
  };

  useEffect(() => {
    fetchGetLineData();
  }, []);

  const fetchGetAllLines = async () => {
    const apiResponse = await api.get("/line/all");
    if (!!apiResponse.data) sAllLinesData(apiResponse.data);
  };

  useEffect(() => {
    fetchGetAllLines();
  }, []);

  return (
    <LineContext.Provider
      value={{
        getAllLines,
        addLine,
        updateLine,
        getLineData,
        getModalVisible,
        setModalVisible,
        setUpdateLinesData,
        getUpdateLinesData,
      }}
    >
      {children}
    </LineContext.Provider>
  );
};

function useLines(): LineContextData {
  const context = useContext(LineContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { LineProvider, useLines };
