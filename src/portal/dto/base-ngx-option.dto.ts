import { NgxOptions } from '../interfaces/portal.interface';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { DataItemDto } from './data-item.dto';
import { SeriesDto } from './series.dto';

@ApiExtraModels(DataItemDto, SeriesDto)
export abstract class BaseNgxOptionDto implements Partial<NgxOptions> {
  [key: string]: unknown;

  @ApiProperty({ required: false, default: false, example: true, description: '是否显示标签' })
  labels: boolean = false;
  @ApiProperty({ required: false, default: true, example: true, description: '是否显示图例' })
  legend: boolean = true;
  @ApiProperty({ required: false, default: false, example: true, description: '显示网格线' })
  showGridLines: boolean = false;
  @ApiProperty({ required: false, default: false, example: false })
  showXAxisLabel: boolean = false;
  @ApiProperty({ required: false, default: false, example: false })
  showYAxisLabel: boolean = false;
  @ApiProperty({
    example: [1400, 800],
    default: [700, 300],
    required: false,
    type: 'array',
    items: { type: 'number' },
    description: '图表大小（[宽，高]）',
  })
  view: [number, number];
  @ApiProperty({ required: false, default: false, example: true, description: '是否显示 x 轴' })
  xAxis: boolean = false;
  @ApiProperty({ example: 'test xAxisLabel', required: false })
  xAxisLabel: string;
  @ApiProperty({ required: false, default: false, example: true, description: '是否显示 y 轴' })
  yAxis: boolean = false;
  @ApiProperty({ example: 'test yAxisLabel', required: false })
  yAxisLabel: string;
}
