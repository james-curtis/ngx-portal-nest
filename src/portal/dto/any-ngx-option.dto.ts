import { ApiProperty } from '@nestjs/swagger';
import { BaseNgxOptionDto } from './base-ngx-option.dto';
import { oneGroupByDemoData } from '../swagger/example-data';

export class AnyNgxOptionDto extends BaseNgxOptionDto {
  @ApiProperty({
    example: oneGroupByDemoData,
    description: '图表数据',
  })
  results: any;
}
