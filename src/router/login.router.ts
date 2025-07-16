import { Router } from "express";
import { Request,Response } from "express";
import { signupUser } from "../controller/signup.controller";

const signupRouter=Router()

signupRouter.get('/signup',signupUser as any)
export default signupRouter