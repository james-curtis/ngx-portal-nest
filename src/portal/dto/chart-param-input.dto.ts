import { ChartParam, ChartType, NgxOptions } from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';
import { NgxOptionDto } from './ngx-option.dto';

export class ChartParamInputDto implements ChartParam {
  @ApiProperty({
    example: '',
    default: '',
    required: false,
    description: '额外 CSS，附加到 body 标签前',
  })
  externalCSS: string;
  @ApiProperty({ type: NgxOptionDto, description: 'ngx-charts 组件参数' })
  ngxOptions: Partial<NgxOptions>;
  @ApiProperty({
    example: 'BarVerticalStackedComponent',
    default: 'BarVerticalComponent',
    enum: ChartType,
    description: '图表类型（ngx-charts 组件名）',
  })
  type: ChartType;

  constructor(param?: Partial<ChartParamInputDto>) {
    param && Object.assign(this, param);
  }
}
