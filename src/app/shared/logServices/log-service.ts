import { Injectable } from '@angular/core';
import { Logger } from 'winston';
//import * as loger from './logger' ;

@Injectable()
export class LogService {
  constructor(/*private logger: Logger*/) { }

  homeToDetail(): void {
    //this.logger.info('home to detail');
  }
}
