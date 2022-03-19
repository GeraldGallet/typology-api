import { LogLevelEnum } from '@/modules/logger/enums/log-level.enum';
import { getDefaultLevelHelper } from '@/modules/logger/helpers/get-default-level.helper';

export class LoggerService {
  private _level: LogLevelEnum;
  private _module: string;
  private _prefix: string;

  constructor(module: string, environment: string, logLevel?: LogLevelEnum) {
    this._module = module;
    this._level = logLevel ?? getDefaultLevelHelper(environment);
    this._prefix = '';
  }

  private _buildMessage(message: string): string {
    return `${new Date().toISOString()}:${this._module}:${this._prefix}:${message}`;
  }

  public set prefix(prefix: string) {
    this._prefix = prefix;
  }

  public debug(message: string): void {
    if (LogLevelEnum.DEBUG >= this._level) {
      console.debug(this._buildMessage(message));
    }
  }

  public info(message: string): void {
    if (LogLevelEnum.INFO >= this._level) {
      console.log(this._buildMessage(message));
    }
  }

  public warn(message: string): void {
    if (LogLevelEnum.WARN >= this._level) {
      console.warn(this._buildMessage(message));
    }
  }

  public error(message: string): void {
    if (LogLevelEnum.ERROR >= this._level) {
      console.error(this._buildMessage(message));
    }
  }
}
