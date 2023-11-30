import { ChartParamInputDto } from './chart-param-input.dto';
import { AnyChartParam, AnyNgxOptions } from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';
import { AnyNgxOptionDto } from './any-ngx-option.dto';

export class AnyChartParamDto extends ChartParamInputDto implements AnyChartParam {
  @ApiProperty({ type: AnyNgxOptionDto, description: 'ngx-charts 组件参数' })
  ngxOptions: AnyNgxOptions;
}
