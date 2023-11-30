import type { DataItem } from '@swimlane/ngx-charts/lib/models/chart-data.model';
import { ApiProperty } from '@nestjs/swagger';

export class DataItemDto implements DataItem {
  @ApiProperty()
  extra: any;
  @ApiProperty()
  label: string;
  @ApiProperty({ required: false })
  max: number;
  @ApiProperty({ required: false })
  min: number;
  @ApiProperty({ required: false })
  name: string;
  @ApiProperty({ required: false })
  value: number;
}
