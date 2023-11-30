import { Body, Controller, Logger, Post, Query } from '@nestjs/common';
import { GetChartInputDto } from './dto/get-chart-input.dto';
import { PortalService } from './portal.service';
import { ParseInputDto } from './dto/parse-input.dto';
import { applyTranslator, isMultiSeries, transformString2Date } from './helper';
import { ChartParam, ChartType2SeriesType, ParseChartParam } from './interfaces/portal.interface';
import { ApiQuery } from '@nestjs/swagger';

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

  @ApiQuery({ name: 'debug', enum: ['true', 'false'], required: false })
  @Post('parse')
  parse(@Body() parseParam: ParseInputDto, @Query('debug') debug: boolean = false) {
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
