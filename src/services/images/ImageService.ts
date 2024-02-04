import axios from 'axios'
import { IImage } from 'types/image/IImage';
const public_api = process.env.NEXT_PUBLIC_API_PATH;

export const get = async (name: string): Promise<IImage> => {
    const res = await axios.get<IImage>(`${public_api}/image?name=${name}`);
    return res.data;
}

export const post = async (file: File): Promise<IImage> => {
    const res = await axios.post<IImage>(`${public_api}/image`, { method: "POST", body: file });
    return res.data;
}

export const downloadLink = `${public_api}/image/resource?name=`;

