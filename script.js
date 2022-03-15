class Employee {
    constructor(employeename, employeeid, employeepermissions, storenumber){
        this.employeename = employeename;
        this.employeeid = employeeid;
        this.permissions = employeepermissions;
        this.storenumber = storenumber;
    }
}

class Manager extends Employee {
    constructor(employeename, employeeid, employeepermissions, storenumber, employeelist,){
        super(employeename,employeeid,employeepermissions,storenumber);
        this.employeesmanaged = [];
            addnewemployee = function (employeename){
                this.employeesmanaged.push(employeename);
                return employeesmanaged;
            } 

    }
}