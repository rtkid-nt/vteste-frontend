interface IStudent {
  name: string;
  answers: boolean[];
}

export interface IMonitoringTest {
  testId: string;
  testCode: string;
  testName: string;
  students?: IStudent[];
  countQuestions: number;
  isEnded: boolean;
}
