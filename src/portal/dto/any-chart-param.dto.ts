import { ChartParamInputDto } from './chart-param-input.dto';
import { AnyChartParam, AnyNgxOptions, ChartType } from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';
import { AnyNgxOptionDto } from './any-ngx-option.dto';

export class AnyChartParamDto extends ChartParamInputDto implements AnyChartParam {
  @ApiProperty({
    example: 'BarVerticalComponent',
    default: 'BarVerticalComponent',
    enum: ChartType,
    description: '图表类型（ngx-charts 组件名）',
  })
  type: ChartType;
  @ApiProperty({ type: AnyNgxOptionDto, description: 'ngx-charts 组件参数' })
  ngxOptions: AnyNgxOptions;
}
