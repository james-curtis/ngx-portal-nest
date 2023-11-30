import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { ChartParamInputDto } from './dto/chart-param-input.dto';
import { PortalService } from './portal.service';
import { ParseInputDto } from './dto/parse-input.dto';
import { applyTranslator, isMultiSeries, transformString2Date } from './helper';
import { ChartParam, ChartType2SeriesType, ParseChartParam } from './interfaces/portal.interface';
import { ApiQuery } from '@nestjs/swagger';
import { Response } from 'express';

@Controller()
export class PortalController {
  private readonly logger = new Logger(PortalController.name);

  constructor(private readonly portalService: PortalService) {}

  @Post(['portal'])
  async getChart(@Body() chartInput: ChartParamInputDto, @Res() response: Response) {
    if (!chartInput.ngxOptions?.results)
      throw new HttpException(
        'chartInput.ngxOptions.results can not be null',
        HttpStatus.BAD_REQUEST,
      );
    const res = chartInput.ngxOptions.results;
    transformString2Date(res);
    isMultiSeries(res) && res.map((e) => transformString2Date(e.series));

    const img = await this.portalService.getChart(chartInput);
    response.type(img.type);
    response.send(Buffer.from(await img.arrayBuffer()));
  }

  @ApiQuery({ name: 'debug', enum: ['true', 'false'], required: false })
  @Post('parse')
  parse(
    @Body() parseParam: ParseInputDto,
    @Query('debug') debug: boolean = false,
    @Res() response: Response,
  ) {
    if (!parseParam.seriesType) {
      parseParam.seriesType = ChartType2SeriesType[parseParam.chartParam.type];
    }
    const puredParam: ParseChartParam = applyTranslator({ param: parseParam });
    const chartParam: ChartParam = puredParam.chartParam;
    if (debug) {
      response.send(chartParam);
      return;
    }
    this.getChart(new ChartParamInputDto({ ...chartParam }), response);
  }
}
