import analysisReportObject from "../../../reports/line-of-code.json";

class CodebaseServices {
  getCodebaseInfo() {
    try {
      const result = [];
      for (let item in analysisReportObject as any) {
        if (item !== "header") {
          result.push({
            toolName: item,
            ...(analysisReportObject as any)[item],
          });
        }
      }
      return result.sort((a: any, b: any) => b.code - a.code);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getTotalLinesOfCode() {
    try {
      const codebase = this.getCodebaseInfo();
      return codebase.reduce((acc, item) => acc + item.code, 0);
    } catch (error: any) {
      throw new error(error);
    }
  }
}

export default new CodebaseServices();
