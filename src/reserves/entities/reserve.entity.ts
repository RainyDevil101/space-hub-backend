import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Reserve extends Document {
  @Prop({ type: String, default: uuidv4, unique: true })
  id: string;

  @Prop({ required: true, default: 'habilitado' })
  type: string;
  
  @Prop({ type: String, required: true, ref: 'User' })
  userId: string;
  
  @Prop({ type: String, required: true, ref: 'Space' })
  spaceId: string;
  
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ReserveSchema = SchemaFactory.createForClass(Reserve);
