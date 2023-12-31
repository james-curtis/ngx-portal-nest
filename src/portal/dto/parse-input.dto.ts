import {
  AnyChartParam,
  MultiSeriesValueDefine,
  ParseChartParam,
  SeriesType,
  SingleSeriesValueDefine,
} from '../interfaces/portal.interface';
import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { SingleSeriesDefineDto } from './single-series-define.dto';
import { MultiSeriesDefineDto } from './multi-series-define.dto';
import { AnyChartParamDto } from './any-chart-param.dto';

@ApiExtraModels(MultiSeriesDefineDto, SingleSeriesDefineDto)
export class ParseInputDto implements ParseChartParam {
  @ApiProperty({ type: AnyChartParamDto, description: '图表参数' })
  chartParam: AnyChartParam;
  @ApiProperty({
    required: false,
    default: null,
    nullable: true,
    example: null,
    enum: SeriesType,
    description: '数据 series 类型（默认根据 chartParam.type 自动设置）',
  })
  seriesType: SeriesType = null;
  @ApiProperty({
    nullable: true,
    example: {
      name: '$..bucketing_attributes..value',
      value: '$..counters..result.value',
    },
    required: false,
    description: 'jsonpath 对应关系',
    oneOf: [
      { $ref: getSchemaPath(SingleSeriesDefineDto) },
      { $ref: getSchemaPath(MultiSeriesDefineDto) },
    ],
  })
  translator: SingleSeriesValueDefine | MultiSeriesValueDefine;
  @ApiProperty({
    default: null,
    example: null,
    nullable: true,
    required: false,
    description: '转换函数（js 字符串）',
  })
  translatorFn: string;
}
