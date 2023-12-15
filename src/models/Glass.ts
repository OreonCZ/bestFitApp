export const getGlasses = async () => {
    const res = await fetch("http://localhost:3000/glasses", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    return createGlassesPayload(res, data);
};

export const getGlass = async (id: string) => {
    const res = await fetch(`http://localhost:3000/glasses/${id}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return createGlassPayload(res, data);
}

export const createGlass = async (formData: GlassType) => {
    const res = await fetch("http://localhost:3000/glasses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createGlassPayload(res, data);
}

export const updateGlass = async (id: string, formData: GlassType) => {
    const res = await fetch(`http://localhost:3000/glasses/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createGlassPayload(res, data);
}

export const deleteGlass = async (id: string) => {
    const res = await fetch(`http://localhost:3000/glasses/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    });
    const data = await res.json();
    return createGlassPayload(res, data);    
}

const createGlassPayload =  (res: Response, data: any): GlassPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

const createGlassesPayload =  (res: Response, data: any): GlassesPayload => {
    return{
        msg: data.msg,
        data: data.payload,
        status: res.status,
    }
}

export type GlassPayload = {
    msg?: string,
    data: GlassType,
    status: number,
}

export type GlassesPayload = {
    msg?: string,
    data: GlassType[],
    status: number,
}

export type GlassType = {
    _id: string,
    name: string,
    brand: string,
    price: number,
    material: string,
    weight: number,
    color: string,
}