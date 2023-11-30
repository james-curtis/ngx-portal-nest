import { SingleSeriesValueDefine } from '../interfaces/portal.interface';
import { ApiProperty } from '@nestjs/swagger';

export class SingleSeriesDefineDto implements SingleSeriesValueDefine {
  @ApiProperty({ required: false, description: 'JSONPATH' })
  extra: string;
  @ApiProperty({ required: false, description: 'JSONPATH' })
  label: string;
  @ApiProperty({ required: false, description: 'JSONPATH' })
  max: string;
  @ApiProperty({ required: false, description: 'JSONPATH' })
  min: string;
  @ApiProperty({ description: 'JSONPATH' })
  name: string;
  @ApiProperty({ description: 'JSONPATH' })
  value: string;
}
