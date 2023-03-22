import { IMonitoringTest } from 'src/app/pages/teacher/monitoring/models/monitoringTest';
import { ITest } from './test';

export interface IUser {
  id: string;
  email: string;
  tests: ITest[];
  testResults: IMonitoringTest[];
}
