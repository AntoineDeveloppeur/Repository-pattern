import { Request, Response, NextFunction } from "express"

export function validateRequestCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // implement form validation
  next()
}
