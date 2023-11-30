import { NgxOptions } from '../interfaces/portal.interface';
import { MultiSeries, SingleSeries } from '@swimlane/ngx-charts';

export class NgxOptionDto implements NgxOptions {
  [key: string]: unknown;
  labels: boolean;
  legend: boolean;
  results: MultiSeries | SingleSeries;
  showGridLines: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  view: [number, number];
  xAxis: boolean;
  xAxisLabel: string;
  yAxis: boolean;
  yAxisLabel: string;
}
