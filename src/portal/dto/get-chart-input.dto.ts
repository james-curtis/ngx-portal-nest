import { ChartParam, ChartType, NgxOptions } from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';

export class GetChartInputDto implements ChartParam {
  @ApiProperty({ required: false })
  externalCSS: string;
  @ApiProperty()
  ngxOptions: Partial<NgxOptions>;
  @ApiProperty()
  type: ChartType;

  constructor(param?: Partial<GetChartInputDto>) {
    param && Object.assign(this, param);
  }
}
