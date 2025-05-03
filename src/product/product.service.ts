import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { AiService } from 'src/ai/ai/ai.service';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) private model: Model<ProductDocument>,
        private readonly aiService: AiService,
    ) {}

    async create(dto: CreateProductDto): Promise<Product> {
        const created = new this.model(dto);
        return created.save();
    }

    async search(keyword: string) {
        const regex = new RegExp(keyword, "i");
        const products = await  this.model.find({
            $or: [
                {title: regex},
                {description: regex}
            ]
        })

        const result = await Promise.all(
            products.map(async (product) => {
                const aiDescription = await this.aiService.generateAnalysis(product.title);

                return {
                    id: product._id,
                    title: product.title,
                    price: product.price,
                    aiDescription,
                    }
                
                
            })
        )

        
        return result;
        
        
    }
}
