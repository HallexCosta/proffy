import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { SQLiteUserRepository } from '../../repositories/implementations/SQLiteUserRepository'
import { SQLiteRecoveryRepository } from '../../repositories/implementations/SQLiteRecoveryRepository'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'
import { ForgotPasswordController } from './ForgotPasswordController'

const sqliteRecoveryRepository = new SQLiteRecoveryRepository()
const sqliteUserRepository = new SQLiteUserRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  sqliteUserRepository,
  sqliteRecoveryRepository,
  mailtrapMailProvider
)

const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordUseCase, forgotPasswordController }