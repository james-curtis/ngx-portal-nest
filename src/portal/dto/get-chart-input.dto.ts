import { ChartParam, ChartType, NgxOptions } from '../interfaces/portal.interface';

export class GetChartInputDto implements ChartParam {
  externalCSS: string;
  ngxOptions: Partial<NgxOptions>;
  type: ChartType;

  constructor(param?: Partial<GetChartInputDto>) {
    param && Object.assign(this, param);
  }
}
