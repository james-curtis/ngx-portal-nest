import { NgxOptions } from '../interfaces/portal.interface';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { DataItemDto } from './data-item.dto';
import { SeriesDto } from './series.dto';

@ApiExtraModels(DataItemDto, SeriesDto)
export abstract class BaseNgxOptionDto implements Partial<NgxOptions> {
  [key: string]: unknown;

  @ApiProperty({ required: false, description: '是否显示标签' })
  labels: boolean;
  @ApiProperty({ required: false, description: '是否显示图例' })
  legend: boolean;
  @ApiProperty({ required: false, description: '显示网格线' })
  showGridLines: boolean;
  @ApiProperty({ required: false })
  showXAxisLabel: boolean;
  @ApiProperty({ required: false })
  showYAxisLabel: boolean;
  @ApiProperty({
    example: [1400, 800],
    default: [700, 300],
    required: false,
    type: 'array',
    items: { type: 'number' },
    description: '图表大小（[宽，高]）',
  })
  view: [number, number];
  @ApiProperty({ required: false, description: '是否显示 x 轴' })
  xAxis: boolean;
  @ApiProperty({ example: 'test xAxisLabel', required: false })
  xAxisLabel: string;
  @ApiProperty({ required: false, description: '是否显示 y 轴' })
  yAxis: boolean;
  @ApiProperty({ example: 'test yAxisLabel', required: false })
  yAxisLabel: string;
}
