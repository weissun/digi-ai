import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { AiService } from './ai/ai/ai.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/digikala"),
    ProductModule,
  ],
  providers: [AiService]
})
export class AppModule {}
