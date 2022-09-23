import bcrypt from 'bcryptjs';

export const hashData = async (data) => {
    return await bcrypt.hash(data, 15);
}

export const compareData = (data1, data2) => {
    return bcrypt.compareSync(data1, data2);
}