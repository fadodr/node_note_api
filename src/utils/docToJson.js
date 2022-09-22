
export const docToJson = function (doc, ret, option) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
}