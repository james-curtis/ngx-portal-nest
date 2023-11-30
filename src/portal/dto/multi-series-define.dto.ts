import { MultiSeriesValueDefine, SingleSeriesValueDefine } from '../interfaces/portal.interface';
import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { SingleSeriesDefineDto } from './single-series-define.dto';

export class MultiSeriesDefineDto implements MultiSeriesValueDefine {
  @ApiProperty({ description: 'JSONPATH' })
  name: string;
  @ApiProperty({ type: SingleSeriesDefineDto, description: 'JSONPATH' })
  series: SingleSeriesValueDefine;
}
