import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
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

  async create(createReserveDto: CreateReserveDto): Promise<Reserve> {
    try {
      const reserve = new this.reserveModel(createReserveDto);
      return await reserve.save();
    } catch (error) {
      throw new BadRequestException('Error creating the reserve');
    }
  }

  async findAll(): Promise<Reserve[]> {
    try {
      return await this.reserveModel.find().exec();
    } catch (error) {
      throw new BadRequestException('Error fetching reserves');
    }
  }

  async findOne(id: string): Promise<Reserve> {
    try {
      const reserve = await this.reserveModel.findOne({ id }).exec();
      if (!reserve) {
        throw new NotFoundException(`Reserve with ID ${id} not found`);
      }
      return reserve;
    } catch (error) {
      throw new NotFoundException(`Error fetching reserve with ID ${id}`);
    }
  }

  async update(id: string, updateReserveDto: UpdateReserveDto): Promise<Reserve> {
    try {
      const updatedReserve = await this.reserveModel.findOneAndUpdate({ id }, updateReserveDto, { new: true }).exec();
      if (!updatedReserve) {
        throw new NotFoundException(`Reserve with ID ${id} not found`);
      }
      return updatedReserve;
    } catch (error) {
      throw new BadRequestException('Error updating the reserve');
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const deletedReserve = await this.reserveModel.findOneAndDelete({ id }).exec();
      if (!deletedReserve) {
        throw new NotFoundException(`Reserve with ID ${id} not found`);
      }
    } catch (error) {
      throw new BadRequestException('Error deleting the reserve');
    }
  }
}
