import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Area extends Document {
  @Prop({ type: String, default: uuidv4, unique: true })
  id: string;

  @Prop({ required: true })
  type: string;
  
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const AreaSchema = SchemaFactory.createForClass(Area);
