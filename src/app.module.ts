import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ReservesModule } from './reserves/reserves.module';
import { SpaceModule } from './space/space.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB),
    UserModule,
    ReservesModule,
    SpaceModule,
    ConfigModule.forRoot()
  ],
})
export class AppModule {}
