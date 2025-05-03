import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { AiService } from 'src/ai/ai/ai.service';

@Controller('product')
export class ProductController {
    constructor(
        private readonly service: ProductService,
        private readonly aiService: AiService
        ) {}

    @Post()
    async create(@Body() dto: CreateProductDto) {
        return this.service.create(dto)
    }

    @Get("search")
    async search(@Query("q") q: string) {
        return this.service.search(q)
    }

    
}