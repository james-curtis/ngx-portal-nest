import { Module } from '@nestjs/common';
import { PortalModule } from './portal/portal.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [PortalModule, HealthModule],
})
export class AppModule {}
