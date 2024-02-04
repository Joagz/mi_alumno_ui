import axios from 'axios'
import { IFile } from 'types/file/IFile';
const public_api = process.env.NEXT_PUBLIC_API_PATH;

export const getByName = async (name: string): Promise<IFile> => {
    const res = await axios.get<IFile>(`${public_api}/file?name=${name}`);
    return res.data;
}

export const post = async (file: File): Promise<IFile> => {
    const res = await axios.post<IFile>(`${public_api}/file`, { method: "POST", body: file });
    return res.data;
}

export const downloadLink = `${public_api}/file/resource?name=`;

