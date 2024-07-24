import { Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { Reserve } from './entities/reserve.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ReservesService {
  constructor(
    @InjectModel(Reserve.name)
    private readonly reserveModel: Model<Reserve>,
  ) {}

  async create(createReserveDto: CreateReserveDto) {
    const reserve = await this.reserveModel.create(createReserveDto);

    return reserve;
  }

  findAll() {
    return `This action returns all reserves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reserve`;
  }

  update(id: number, updateReserveDto: UpdateReserveDto) {
    return `This action updates a #${id} reserve`;
  }

  remove(id: number) {
    return `This action removes a #${id} reserve`;
  }
}
