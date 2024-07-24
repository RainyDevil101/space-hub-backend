import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AreasModule } from './areas/areas.module';
import { ReservesModule } from './reserves/reserves.module';
import { SpaceModule } from './space/space.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/spacehub'),
    UserModule,
    AreasModule,
    ReservesModule,
    SpaceModule,
  ],
})
export class AppModule {}
