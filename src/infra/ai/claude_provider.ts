import { createAnthropic } from '@ai-sdk/anthropic'
import { generateText, streamText } from 'ai'
import type { AIProvider } from '@/domain/interfaces/ai_provider'
import type { CoreMessage } from 'ai'

export class ClaudeProvider implements AIProvider {
  private client = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

  async chat(messages: CoreMessage[]): Promise<string> {
    const { text } = await generateText({
      model: this.client('claude-opus-4-5'),
      messages,
    })
    return text
  }

  streamChat(messages: CoreMessage[]): Response {
    const result = streamText({
      model: this.client('claude-opus-4-5'),
      messages,
    })
    return result.toDataStreamResponse()
  }
}
