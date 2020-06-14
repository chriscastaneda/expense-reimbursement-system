import express from 'express';
import bodyParser from 'body-parser';
import { associateRouter } from '../../src/routers/associate.router';
import * as associateService from '../../src/services/associate.service';
import request from 'supertest';

/**Mock Service Layer */
jest.mock('../../src/services/employee-service');
