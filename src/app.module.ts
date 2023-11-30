import { Module } from '@nestjs/common';
import { PortalModule } from './portal/portal.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PortalModule,
    HealthModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env.prod', '.env'],
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
