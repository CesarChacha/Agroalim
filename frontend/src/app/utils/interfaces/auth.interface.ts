export interface auth {
    id_administrador: number,
    user : string,
    password : string,
    token : string,
    nombre : string,
    apellido : string
}

export interface administrador {
    id_administrador: number,
    password : string,
    nombre : string,
    apellido : string,
    correo: string,
    fecha_actualizacion: string,
    activo: boolean,
    baja: boolean
}