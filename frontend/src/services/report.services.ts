import utils from "../utils/utils";

// service to manipulate analysis report json data

class ReportService {
  removeZeroErrorCountObjects(dataObjectArr: any) {
    try {
      let result = [];

      for (let item of dataObjectArr) {
        if (
          !item.errorCount ||
          !item.fatalErrorCount ||
          !item.fixableErrorCount ||
          !item.fixableWarningCount ||
          !item.warningCount
        ) {
          result.push(item);
        }
      }
      return result;
    } catch (error) {
      throw new Error("Error while removing zero error object");
    }
  }

  getErrorCountObject(dataObjectArr: any) {
    try {
      return utils.getErrorCountObject(dataObjectArr);
    } catch (error) {
      throw new Error("Error while counting error objects");
    }
  }

  getWarningCountObject(dataObjectArr: any) {
    try {
      return utils.getWarningCountObject(dataObjectArr);
    } catch (error) {
      throw new Error("Error while warning count object");
    }
  }
}

export default new ReportService();
