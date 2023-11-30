import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChartParam, SvgApiParam } from './interfaces/portal.interface';
import { stringify } from 'superjson';

@Injectable()
export class PortalService {
  private readonly ngxRenderUrl: string;
  private readonly svg2bitmapUrl: string;
  private readonly logger = new Logger(PortalService.name);

  constructor(private readonly configService: ConfigService) {
    const ngxRenderHost = this.configService.get('ngxRenderHost', 'localhost:4200');
    const svg2bitmapHost = this.configService.get('svg2bitmapHost', 'localhost:3000');
    this.ngxRenderUrl = `http://${ngxRenderHost}/home`;
    this.svg2bitmapUrl = `http://${svg2bitmapHost}/svg2bitmap`;
  }

  async getChart(chartParam: ChartParam) {
    try {
      this.logger.log(`requesting ${this.ngxRenderUrl}`);
      let response = await fetch(this.ngxRenderUrl, {
        method: 'POST',
        body: stringify(chartParam),
        headers: { 'Content-Type': 'application/json' },
      });
      const html = await response.text();

      const svgApiData: SvgApiParam = {
        html: encodeURIComponent(html),
        locator: `//app-hoc`,
      };
      this.logger.log(`requesting ${this.svg2bitmapUrl}`);
      response = await fetch(this.svg2bitmapUrl, {
        method: 'POST',
        body: JSON.stringify(svgApiData),
        headers: { 'Content-Type': 'application/json' },
      });
      return await response.blob();
    } catch (e) {
      throw new HttpException(e.toString(), HttpStatus.BAD_GATEWAY);
    }
  }
}
