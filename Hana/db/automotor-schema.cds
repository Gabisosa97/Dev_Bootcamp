using {
    managed,
    cuid,
} from '@sap/cds/common';

namespace sap.capire.automotor;

entity Marcas : managed, cuid {
    name              : String(111);
    @readonly country : String(111);
    description       : String(111);
}

entity Modelos : managed, cuid {
    name        : String(111);
    description : String(111);

}



entity Versiones : managed, cuid {
    key model : Association to Modelos;
    key color : String(111);
        price : Integer;
}

aspect Marca {

}
