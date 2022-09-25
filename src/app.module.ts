import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    /* TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'techcasp.cw5rwj0xy7gj.sa-east-1.rds.amazonaws.com',
    port: 5432,
    username: 'techcasp',
    password: '21041898',
    database: 'bd_techcasp',
    ssl: { rejectUnauthorized: false },
    entities: [],
    synchronize: true,
  }) */
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
