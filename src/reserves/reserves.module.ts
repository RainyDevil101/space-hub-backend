import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Reserve, ReserveSchema } from './entities/reserve.entity';

@Module({
  controllers: [ReservesController],
  providers: [ReservesService],
  imports: [
    MongooseModule.forFeature([{ name: Reserve.name, schema: ReserveSchema }]),
  ],
})
export class ReservesModule {}
