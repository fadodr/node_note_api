import joi from 'joi';
import joiObjectId from 'joi-objectid'
joi.objectId = joiObjectId(joi);

const joiValidate = (valSchema, obj) => {
    const { error, value } = valSchema.validate(obj);
    if (error) {
        throw error;
    }
    return value;
}

export { joi, joiValidate };