import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schemas/product.schema";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { Module } from "@nestjs/common";
import { AiService } from "src/ai/ai/ai.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
  ],
  controllers: [ProductController],
  providers: [ProductService, AiService],
  
})
export class ProductModule {}
