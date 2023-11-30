import {
  AnyChartParam,
  MultiSeriesValueDefine,
  ParseChartParam,
  SeriesType,
  SingleSeriesValueDefine,
} from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ParseInputDto implements ParseChartParam {
  @ApiProperty()
  chartParam: AnyChartParam;
  @ApiProperty({ required: false })
  seriesType: SeriesType = SeriesType.SingleSeries;
  @ApiProperty({ required: false })
  translator: SingleSeriesValueDefine | MultiSeriesValueDefine;
  @ApiProperty({ required: false })
  translatorFn: string;
}
