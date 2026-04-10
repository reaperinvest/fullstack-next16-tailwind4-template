import type { CoreMessage } from 'ai'

// Domain contract — no vendor knowledge
export interface AIProvider {
  chat(messages: CoreMessage[]): Promise<string>
  streamChat(messages: CoreMessage[]): Response
}
