import type { AIProvider } from '@/domain/interfaces/ai_provider'
import type { CoreMessage } from 'ai'

export class ChatUseCase {
  constructor(private ai: AIProvider) {}

  async execute(messages: CoreMessage[]): Promise<string> {
    if (messages.length === 0) {
      throw new Error('Messages cannot be empty')
    }
    return this.ai.chat(messages)
  }

  stream(messages: CoreMessage[]): Response {
    return this.ai.streamChat(messages)
  }
}
