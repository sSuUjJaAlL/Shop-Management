import HttpStatus, { BAD_GATEWAY, BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } from 'http-status-codes';

export const HTTP_STATUS= Object.freeze({
    SUCCESS:{
        CODE: HttpStatus.OK,
        Message:'Request Success'
    },
    UNAUTHORIZED:{
        CODE: HttpStatus.UNAUTHORIZED,
        Message:'Authorization Error'
    },
    BAD_REQUEST:{
        CODE: HttpStatus.BAD_REQUEST,
        Message:'Bad Request'
    },
    NOT_FOUND:{
        CODE: HttpStatus.NOT_FOUND,
        Message:'Not Found Error'
    },
    INTERNAL_SERVER_ERROR:{
        CODE: HttpStatus.INTERNAL_SERVER_ERROR,
        Message:'Internal Server Error found'
    },
    VALIDATION_ERROR:{
        CODE: HttpStatus.UNPROCESSABLE_ENTITY,
        Message:'Valid Error'
    },
    DATABASE_ERROR:{
        CODE: HttpStatus.BAD_REQUEST,
        Message:'Database Error'
    },

})