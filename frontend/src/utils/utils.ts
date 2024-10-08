class Utils {
  getErrorCountObject = (
    reportObj: Array<any>
  ): {
    errorCount: number;
    fatalErrorCount: number;
    fixableErrorCount: number;
  } => {
    try {
      let errorCount = 0,
        fatalErrorCount = 0,
        fixableErrorCount = 0;

      reportObj.forEach((item: any) => {
        errorCount += item.errorCount;
        fatalErrorCount += item.fatalErrorCount;
        fixableErrorCount += item.fixableErrorCount;
      });
      return { errorCount, fatalErrorCount, fixableErrorCount };
    } catch (error) {
      throw new Error(`Error while parsing report object ${error}`);
    }
  };

  getWarningCountObject = (
    reportObj: Array<any>
  ): { fixableWarningCount: number; warningCount: number } => {
    try {
      let fixableWarningCount = 0,
        warningCount = 0;

      reportObj.forEach((item: any) => {
        fixableWarningCount += item.fixableWarningCount;
        warningCount += item.warningCount;
      });

      return { fixableWarningCount, warningCount };
    } catch (error) {
      throw new Error(`Error while parseing report object ${error}`);
    }
  };

  getErrorsAndWarningsObject = () => {
    return;
  };
}

export default new Utils();
