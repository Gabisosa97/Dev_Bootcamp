using {sap.capire.sales as my} from '../db/sales-schema';

service storeSales @(path: '/storeSales') {
    @readonly
    entity Clients  as projection on my.Clients;

    entity Products as projection on my.Products;

//@requires: 'authenticated-user'

//action submitOrder (book: Books:ID, quantity: Integer);

}
