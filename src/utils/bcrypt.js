import bcrypt from 'bcryptjs';

export const hashData = async (data) => {
    return await bcrypt.hash(data, 15);
}

export const compareData = async (data1, data2) => {
    return await bcrypt.compare(data1, data2);
}