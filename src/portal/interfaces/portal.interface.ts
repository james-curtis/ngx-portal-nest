import { MultiSeries, SingleSeries } from '@swimlane/ngx-charts';

export interface SingleSeriesValueDefine {
  name: string;
  value: string;
  extra?: string;
  min?: string;
  max?: string;
  label?: string;
}

export interface MultiSeriesValueDefine {
  name: string;
  series: SingleSeriesValueDefine;
}

export type ValueDefine = SingleSeriesValueDefine | MultiSeriesValueDefine;

export interface NgxOptions {
  [key: string]: unknown;
  results: MultiSeries | SingleSeries;
  view: [number, number];
  legend: boolean;
  labels: boolean;
  showGridLines: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
  xAxis: boolean;
  yAxis: boolean;
}

export interface AnyNgxOptions extends NgxOptions {
  results: any;
}

export enum ChartType {
  AdvancedPieChartComponent = 'AdvancedPieChartComponent',
  AreaChartComponent = 'AreaChartComponent',
  AreaChartNormalizedComponent = 'AreaChartNormalizedComponent',
  AreaChartStackedComponent = 'AreaChartStackedComponent',
  BarHorizontalComponent = 'BarHorizontalComponent',
  BarHorizontalNormalizedComponent = 'BarHorizontalNormalizedComponent',
  BarHorizontalStackedComponent = 'BarHorizontalStackedComponent',
  BarVerticalComponent = 'BarVerticalComponent',
  BarVertical2DComponent = 'BarVertical2DComponent',
  BarVerticalNormalizedComponent = 'BarVerticalNormalizedComponent',
  BarVerticalStackedComponent = 'BarVerticalStackedComponent',
  BoxChartComponent = 'BoxChartComponent',
  BubbleChartComponent = 'BubbleChartComponent',
  GaugeComponent = 'GaugeComponent',
  HeatMapComponent = 'HeatMapComponent',
  LineChartComponent = 'LineChartComponent',
  NumberCardComponent = 'NumberCardComponent',
  PieChartComponent = 'PieChartComponent',
  PieGridComponent = 'PieGridComponent',
  PolarChartComponent = 'PolarChartComponent',
  TreeMapComponent = 'TreeMapComponent',
}

export interface ChartParam {
  type: ChartType;
  externalCSS?: string;
  ngxOptions?: Partial<NgxOptions>;
}

export interface AnyChartParam extends ChartParam {
  ngxOptions?: AnyNgxOptions;
}

export enum SeriesType {
  SingleSeries = 'SingleSeries',
  MultiSeries = 'MultiSeries',
  BubbleChartMultiSeries = 'BubbleChartMultiSeries',
  BoxChartMultiSeries = 'BoxChartMultiSeries',
  TreeMapData = 'TreeMapData',
  SankeyData = 'SankeyData',
}

export const ChartType2SeriesType: Partial<Record<ChartType, SeriesType>> = {
  [ChartType.PieChartComponent]: SeriesType.SingleSeries,

  [ChartType.BarVerticalComponent]: SeriesType.SingleSeries,
  [ChartType.BarVertical2DComponent]: SeriesType.MultiSeries,
  [ChartType.BarVerticalStackedComponent]: SeriesType.MultiSeries,
  [ChartType.BarVerticalNormalizedComponent]: SeriesType.MultiSeries,

  [ChartType.BarHorizontalComponent]: SeriesType.SingleSeries,
  [ChartType.BarHorizontalStackedComponent]: SeriesType.MultiSeries,
  [ChartType.BarHorizontalNormalizedComponent]: SeriesType.MultiSeries,

  [ChartType.NumberCardComponent]: SeriesType.SingleSeries,
};

export interface ParseChartParam {
  translator?: SingleSeriesValueDefine | MultiSeriesValueDefine;
  translatorFn?: string;
  chartParam: AnyChartParam;
  seriesType?: SeriesType;
}

export interface SvgApiParam {
  url?: string;
  html?: string;
  locator?: string;
}
