import request from "supertest";
import { app } from "../app";
import { Book } from "../models/book";

import * as bookDB from "../database/database";
jest.mock("../database/database");

afterEach(() => {
	jest.clearAllMocks();
});
