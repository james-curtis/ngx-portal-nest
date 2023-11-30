import { MultiSeries, SingleSeries } from '@swimlane/ngx-charts';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { DataItemDto } from './data-item.dto';
import { SeriesDto } from './series.dto';
import { BaseNgxOptionDto } from './base-ngx-option.dto';
import { multi } from '../swagger/example-data';

export class NgxOptionDto extends BaseNgxOptionDto {
  @ApiProperty({
    example: multi,
    oneOf: [
      { type: 'array', items: { $ref: getSchemaPath(DataItemDto) } },
      { type: 'array', items: { $ref: getSchemaPath(SeriesDto) } },
    ],
    description: '图表数据',
  })
  results: MultiSeries | SingleSeries;
}
