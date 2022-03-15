
/* Problem Number 1 */
class Employee {
    constructor(employeename, employeeid, employeepermissions, storenumber){
        this.employeename = employeename;
        this.employeeid = employeeid;
        this.permissions = employeepermissions;
        this.storenumber = storenumber;
    }
}


/* Problem Number 2 */
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

/* Problem Number 3 */
const [fin,est,sw,den,nor] = countries;