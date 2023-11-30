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
  @ApiProperty({ required: false, enum: SeriesType, description: '数据 series 类型' })
  seriesType: SeriesType = SeriesType.SingleSeries;
  @ApiProperty({
    nullable: true,
    example: null,
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
