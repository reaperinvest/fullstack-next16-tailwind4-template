import type { UserRepository } from '@/domain/interfaces/user_repository'
import type { User, CreateUserInput } from '@/domain/entities/user'
import { db } from '@/infra/db/prisma_client'
import bcrypt from 'bcryptjs'

export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    return db.user.findUnique({ where: { email } })
  }

  async findById(id: string): Promise<User | null> {
    return db.user.findUnique({ where: { id } })
  }

  async create(input: CreateUserInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 12)
    return db.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: hashedPassword,
      },
    })
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return db.user.update({ where: { id }, data })
  }
}
