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
    return (req, res, next) => {
        const controllerArgs = getControllerArgs(req);

        try {
           if (valSchema) {
                const { input } = controllerArgs;
                const { inputValSchema } = valSchema;

                try {
                    if (inputValSchema) joiValidate(inputValSchema, input);
                } catch (error) {
                    throw new UnProcessableError(error.message);
                }
            } 
            const result = controllerFn(controllerArgs);
            if (result == undefined) {
                res.status(200).send({ status: true });
                return;
            }
            res.status(result.code ?? 200).json({
                status: true,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }    
    }
 };