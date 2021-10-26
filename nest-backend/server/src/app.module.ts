import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetModule } from './budget/budget.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/moolabudget', { autoCreate: true }),BudgetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
