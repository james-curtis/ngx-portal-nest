import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('health')
export class HealthController {
  @Get('live')
  live(@Res() res: Response): Response<void> {
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
