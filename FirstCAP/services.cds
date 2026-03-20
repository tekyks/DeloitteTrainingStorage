using {cuid} from '@sap/cds/common';

//using { cuid, Country, Currency } from '@sap/cds/common';

//using from '@sap/cds-common-content';

//custom aspect
// aspect cuid{
//     key ID: UUID;
// }

service bookshop {

    // entity Books : cuid {
    //     title    : String;
    //     country  : Country;
    //     price    : Decimal;
    //     currency : Currency;
    // }

    //managed association
    // 1 - 1 relationship
    entity Books : cuid {
        title  : String;
        author : Association to Authors;
    }

    //unmanged association
    // entity Books: cuid {
    //     title: String;
    //     author_foreignkey: type of Authors : ID;
    //     author: Association to Authors
    //                 on author.ID = author_foreignkey;
    // }

    // entity Authors: cuid {
    //     name: String;
    // }

    //to Many association
    entity Authors : cuid {
        name : String;
        book : Association to many Books
                   on book.author = $self;
    }

    //Compositions
    // entity Orders : cuid {
    //     customer : String;
    //     Items    : Composition of many OrderItems
    //                    on Items.parent = $self;
    // }

    // entity OrderItems {
    //     key parent   : Association to Orders;
    //     key position : Integer;
    //         quantity : Integer
    // }

    //Composition of Aspects

    entity Orders: cuid{
        customer: String;
        Items : Composition of many {
            key position: Integer;
            quantity : Integer;
            book: Association to Books;
        }

    }

}
