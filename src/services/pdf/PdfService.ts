import axios from 'axios'
import { IPdf } from 'types/pdf/IPdf';
const public_api = process.env.NEXT_PUBLIC_API_PATH;

export const get = async (name: string): Promise<IPdf> => {
    const res = await axios.get<IPdf>(`${public_api}/pdf?name=${name}`);
    return res.data;
}

export const post = async (file: File): Promise<IPdf> => {
    const res = await axios.post<IPdf>(`${public_api}/pdf`, { method: "POST", body: file });
    return res.data;
}

export const downloadLink = `${public_api}/pdf/resource?name=`;
