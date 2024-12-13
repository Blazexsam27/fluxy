import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReportObject = {
  filePath: string;
  message: any[];
};

type ReportState = {
  reportObjectList: ReportObject[];
  errorObjectList: ReportObject[];
  warningObjectList: ReportObject[];
};

const initialState: ReportState = {
  reportObjectList: [],
  errorObjectList: [],
  warningObjectList: [],
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setReportObjectList(state: any, action: PayloadAction<any>) {
      const payload = action.payload;
      state.reportObjectList = payload;

      // Extract errors
      const errors: { messages: any[]; filePath: string }[] = [];
      payload.map((obj: any) => {
        obj.messages.map((item: any) => {
          if (item.severity === 2) {
            errors.push({
              messages: item,
              filePath: obj.filePath,
            });
          }
        });
      });
      state.errorObjectList = errors;

      // Extract warnings
      const warnings: { messages: any[]; filePath: string }[] = [];
      payload.map((obj: any) => {
        obj.messages.map((item: any) => {
          if (item.severity === 1) {
            errors.push({
              messages: item,
              filePath: obj.filePath,
            });
          }
        });
      });
      state.warningObjectList = warnings;
    },
  },
});

export const { setReportObjectList } = reportSlice.actions;
export default reportSlice.reducer;
