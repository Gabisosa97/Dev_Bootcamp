using {sap.capire.automotor as my} from '../db/automotor-schema';

service autoService @(path: '/autoService') {
    @readonly
    entity Marcas    as projection on my.Marcas;

    entity Modelos   as projection on my.Modelos;
    entity Versiones as projection on my.Versiones;

}
