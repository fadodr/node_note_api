import { joiValidate } from '../utils';
import { UnProcessableError } from '../errors';

function getControllerArgs(req) {
    return {
        input: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers
    };
} 

export const controllerHandler = (controllerFn, valSchema) => {
    return async (req, res, next) => {
        const controllerArgs = getControllerArgs(req);

        try {
           if (valSchema) {
               const { input, params }  = controllerArgs;
               const { inputVal, paramsVal } = valSchema;

                try {
                    if (inputVal) joiValidate(inputVal, input);
                    if (paramsVal) joiValidate(paramsVal, params);
                } catch (error) {
                    throw new UnProcessableError(error.message);
                }
            } 
            const result = await controllerFn(controllerArgs);
            if (result == undefined) {
                res.status(200).send({ status: true });
                return;
            }
            const { code, ...data } = result;
            res.status(code ?? 200).send({ data });
        } catch (error) {
            next(error);
        }    
    }
 };