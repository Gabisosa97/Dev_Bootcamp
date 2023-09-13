using {
    managed,
    cuid,
} from '@sap/cds/common';

namespace sap.capire.sales;

entity Clients : managed, cuid {
    name      : String(111);
    lastname  : String(111);
    dni       : Integer;
    birthDate : Timestamp;
}

entity Products : managed, cuid {
    productName : String(111);
    job         : String(30) enum {
        Limpieza   = 'LP';
        Fiambreria = 'FB';
    };
    price       : Integer;
    stock       : Integer;
    minStock    : Integer;

}
