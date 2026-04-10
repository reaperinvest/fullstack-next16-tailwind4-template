import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { generateText, streamText } from 'ai'
import type { AIProvider } from '@/domain/interfaces/ai_provider'
import type { CoreMessage } from 'ai'

export class GeminiProvider implements AIProvider {
  private client = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_AI_API_KEY })

  async chat(messages: CoreMessage[]): Promise<string> {
    const { text } = await generateText({
      model: this.client('gemini-1.5-pro'),
      messages,
    })
    return text
  }

  streamChat(messages: CoreMessage[]): Response {
    const result = streamText({
      model: this.client('gemini-1.5-pro'),
      messages,
    })
    return result.toDataStreamResponse()
  }
}
