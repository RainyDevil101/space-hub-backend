import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ReservesModule } from './reserves/reserves.module';
import { SpaceModule } from './space/space.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/spacehub'),
    UserModule,
    ReservesModule,
    SpaceModule,
  ],
})
export class AppModule {}
