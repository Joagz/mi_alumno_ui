import axios from 'axios'
const public_api = process.env.NEXT_PUBLIC_API_PATH;

export const getByName = async (name: string) => {
    const res = await axios.get(`${public_api}/file?name=${name}`);
    return res.data;
}

export const post = async (file: File) => {
    const res = await axios.post(`${public_api}/file`, { method: "POST", body: file });
    return res.data;
}

export const downloadLink = `${public_api}/file/resource?name=`;

