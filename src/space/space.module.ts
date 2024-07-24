import { Module } from '@nestjs/common';
import { SpaceService } from './space.service';
import { SpaceController } from './space.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from './entities/space.entity';

@Module({
  controllers: [SpaceController],
  providers: [SpaceService],
  imports: [
    MongooseModule.forFeature([{name: Space.name, schema: SpaceSchema}])
  ]
})
export class SpaceModule {}
