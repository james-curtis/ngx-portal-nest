import {
  AnyChartParam,
  MultiSeriesValueDefine,
  ParseChartParam,
  SeriesType,
  SingleSeriesValueDefine,
} from '../interfaces/portal.interface';

export class ParseInputDto implements ParseChartParam {
  chartParam: AnyChartParam;
  seriesType: SeriesType = SeriesType.SingleSeries;
  translator: SingleSeriesValueDefine | MultiSeriesValueDefine;
  translatorFn: string;
}
