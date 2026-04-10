import { createAIProvider } from '@/infra/ai/ai_factory'
import { ChatUseCase } from '@/use-cases/ai/chat_use_case'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const aiProvider = createAIProvider()
  const chatUseCase = new ChatUseCase(aiProvider)

  return chatUseCase.stream(messages)
}
