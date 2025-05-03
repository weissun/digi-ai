import { Injectable } from '@nestjs/common';
import OpenAI from "openai"

@Injectable()
export class AiService {

    generateAnalysis(productName: string): string {
        if (productName.toLowerCase().includes("tv")) {
            return "tv"
        } else if (productName.toLowerCase().includes("mob")) {
            return " mobile"
        } else if (productName.toLowerCase().includes("car")) {
            return " car"
        } else {
        return "good"
        }
    }
}