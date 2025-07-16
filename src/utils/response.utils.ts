import statusCode from 'http-status-codes'
import { Response } from 'express';
import { HTTP_STATUS } from '../constants.ts/http-status.constant';
function sendSuccessResponse<T>(
  res: Response,
  data: T,
  message: string = 'Success',
  status: number = statusCode.OK,
): Response<any, Record<string, any>> {
  return res.status(status).json({
    message,
    error: false,
    data,
  });
}
function sendErrorResponse<T>(
    res:Response,
    data:T,
    message: string=HTTP_STATUS.VALIDATION_ERROR.Message,
    status: number=HTTP_STATUS.VALIDATION_ERROR.CODE,
):Response<any,Record<string,any>>{
    return res.status(status).json({
        message,
        error:true,
        data
    })
}
export{
    sendSuccessResponse,
    sendErrorResponse
}