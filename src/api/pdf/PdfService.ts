import axios from 'axios'
const public_api = process.env.NEXT_PUBLIC_API_PATH;

export const get = async (name: string) => {
    const res = await axios.get(`${public_api}/pdf?name=${name}`);
    return res.data;
}

export const post = async (file: File) => {
    const res = await axios.post(`${public_api}/pdf`, { method: "POST", body: file });
    return res.data;
}

export const downloadLink = `${public_api}/pdf/resource?name=`;
