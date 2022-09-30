export interface puesto {
    id_puesto : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface profesion {
    id_profesion : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface norma { 
    id_norma : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface comite { 
    id_comite : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface facturacion {
    id_facturacion : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface actividad {
    id_actividad : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface tema {
    id_tema : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface organizacion {
    id_organizacion : number,
    nombre : string,
    activo : boolean,
    baja : boolean,
    fecha_actualizacion : string
}

export interface catalogo {
    nombre : string,
    nombre_tabla : string,
    nombre_pk : string,
    endpoint : string
}