import 'reflect-metadata';

export { Core } from './core/server';
export { IAuth } from './auth/auth.interface';
export { IUser } from './auth/auth.container';

export * from './auth/strategies';

export * from './auth/auth.decorator';

export * from './routing/controllers/controller.decorators';
export * from './routing/controllers/controller.types';
export * from './routing/middleware/middleware.decorators';
export * from './dto/dto.decorators';
export * from './sockets/socket.decorator';

export { IController } from './routing/controllers/controller.interface';
export { ISocket } from './sockets/socket.interfaces';

export * from './services/services.decorator';

export * from './database/repository.decorator';

export * from './dependency/dependency.decorators';
export { define, onInit } from './dependency/dependency.utils';

export * from './http/error/http.error';
export * from './aliases';

export * from './http/message/index';

export * from './worker/worker.decorators';

export { getContainer } from './dependency/dependency.container';