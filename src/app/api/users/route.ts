import { NextResponse } from 'next/server'
import { LoginUseCase } from '@/use-cases/auth/login_use_case'
import { PrismaUserRepository } from '@/infra/db/user_repository'

// UI Layer — compose dependencies + return HTTP response, no business logic
export async function POST(req: Request) {
  const { email, password } = await req.json()

  const userRepo = new PrismaUserRepository()
  const loginUseCase = new LoginUseCase(userRepo)
  const user = await loginUseCase.execute(email, password)

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  return NextResponse.json({ user })
}
