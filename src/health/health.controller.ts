import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'if alive' })
  @Get('live')
  live(@Res() res: Response): Response<void> {
    return res.status(HttpStatus.NO_CONTENT).send();
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'if ready' })
  @Get('ready')
  ready(@Res() res: Response): Response<void> {
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
