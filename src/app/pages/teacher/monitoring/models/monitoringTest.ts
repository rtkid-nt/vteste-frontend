export interface IMonitoringTest {
  testId: string;
  testCode: string;
  testName: string;
  students?: [{ name: string; answers: boolean[] }];
  countQuestions: number;
}
