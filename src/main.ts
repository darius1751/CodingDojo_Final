import express from 'express'
import { join } from 'path';
import cors from 'cors'
import helmet from 'helmet';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { serve, setup } from 'swagger-ui-express';
import { openConnection } from './config/mongoose.config';
import { authRouter } from './routers/auth.router';
import { userRouter } from './routers/user.router';
import { swagger } from './swagger';
import { movieRouter } from './routers/movie.router';
const main = async () => {
    config();
    const app = express();
    app.use(cookieParser());
    app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'https://codingdojo-final-frontend.onrender.com'] }));
    app.use(helmet());
    app.use(express.json());
    await openConnection();
    app.use('/', express.static(join(__dirname, "..", "public")))
    app.use('/api-docs', serve, setup(swagger))
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/user', userRouter);
    app.use('/api/v1/movie', movieRouter);
    const port = process.env.PORT || 4001;
    app.listen(port, () => {
        console.log(`App run in port: ${port}`);
    });
}
main();