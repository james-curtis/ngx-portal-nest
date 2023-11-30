import { Body, Controller, Logger, Param, Post } from '@nestjs/common';
import { GetChartInputDto } from './dto/get-chart-input.dto';
import { PortalService } from './portal.service';
import { ParseInputDto } from './dto/parse-input.dto';
import { applyTranslator, isMultiSeries, transformString2Date } from './helper';
import { ChartParam, ChartType2SeriesType, ParseChartParam } from './interfaces/portal.interface';

@Controller()
export class PortalController {
  private readonly logger = new Logger(PortalController.name);

  constructor(private readonly portalService: PortalService) {}

  @Post('getChart')
  async getChart(@Body() chartInput: GetChartInputDto) {
    if (!chartInput.ngxOptions?.results)
      throw new Error('chartInput.ngxOptions.results can not be null');
    const res = chartInput.ngxOptions.results;
    transformString2Date(res);
    isMultiSeries(res) && res.map((e) => transformString2Date(e.series));

    const img = await this.portalService.getChart(chartInput);
    return img;
  }

  @Post('parse')
  parse(@Body() parseParam: ParseInputDto, @Param('debug') debug: boolean) {
    if (!parseParam.seriesType) {
      parseParam.seriesType = ChartType2SeriesType[parseParam.chartParam.type];
    }
    const puredParam: ParseChartParam = applyTranslator({ param: parseParam });
    const chartParam: ChartParam = puredParam.chartParam;
    if (debug) {
      return chartParam;
    }
    this.getChart(new GetChartInputDto({ ...chartParam }));
  }
}
