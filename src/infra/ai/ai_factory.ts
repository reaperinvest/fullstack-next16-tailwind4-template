import type { AIProvider } from '@/domain/interfaces/ai_provider'
import { OpenAIProvider } from './openai_provider'
import { GeminiProvider } from './gemini_provider'
import { ClaudeProvider } from './claude_provider'

// Switch AI vendor by changing AI_PROVIDER in .env only — no code changes
export function createAIProvider(): AIProvider {
  const provider = process.env.AI_PROVIDER ?? 'openai'

  switch (provider) {
    case 'openai':
      return new OpenAIProvider()
    case 'gemini':
      return new GeminiProvider()
    case 'claude':
      return new ClaudeProvider()
    default:
      throw new Error(`Unknown AI_PROVIDER: "${provider}". Use: openai | gemini | claude`)
  }
}
