import { cache } from "react";

const path = process.env.NEXT_PUBLIC_PRONVINCIAS_PATH + "?campos=nombre";

async function call() {
    const data = (await fetch(path!)).json();
    return data;
}

export const getProvincias = cache(async () => {
    const data = await call();
    var res: { value: string }[] = [];
    data.provincias
        .sort(function (a: any, b: any) {
            return a.id - b.id;
        })
        .map((provincia: { nombre: string }) => {
            res.push({
                value: provincia.nombre,
            });
        });
    return res.sort();
});