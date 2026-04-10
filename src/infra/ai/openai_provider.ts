import { createOpenAI } from '@ai-sdk/openai'
import { generateText, streamText } from 'ai'
import type { AIProvider } from '@/domain/interfaces/ai_provider'
import type { CoreMessage } from 'ai'

export class OpenAIProvider implements AIProvider {
  private client = createOpenAI({ apiKey: process.env.OPENAI_API_KEY })

  async chat(messages: CoreMessage[]): Promise<string> {
    const { text } = await generateText({
      model: this.client('gpt-4o'),
      messages,
    })
    return text
  }

  streamChat(messages: CoreMessage[]): Response {
    const result = streamText({
      model: this.client('gpt-4o'),
      messages,
    })
    return result.toDataStreamResponse()
  }
}
