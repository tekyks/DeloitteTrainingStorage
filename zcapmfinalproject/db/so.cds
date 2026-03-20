namespace techyks.api;

aspect cuid : {
    key ID : UUID;
}

entity SalesOrder : cuid {
    SalesOrderDesc  : String;
    Customer        : String;
    CustmerNo       : String;
    SalesOrderTotal : Decimal;
    SOItems         : Composition of many SalesOrderItems
                          on SOItems.parent = $self;
}

entity SalesOrderItems : cuid {
    key parent      : Association to SalesOrder;
        ProductId   : String;
        ProductName : String;
        UnitPrice   : Decimal;
        Quantity    : Integer;
        UnitTotal   : Decimal;
}
