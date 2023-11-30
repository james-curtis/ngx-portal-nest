import type { DataItem, Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';
import { ApiExtraModels, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { DataItemDto } from './data-item.dto';

export class SeriesDto implements Series {
  @ApiProperty()
  name: string;
  @ApiProperty({ type: 'array', items: { $ref: getSchemaPath(DataItemDto) } })
  series: DataItem[];
}
