
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
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin,est,sw,den,nor] = countries;

/* Problem Number 4 */
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
myRectangle(rectangle);
function myRectangle({width, height, area, perimeter}){
    const mysamplerectangle = "My rectangle has width " + width + "and its height is " + height + "which means that it's area is " + area + "and its perimeter is " + perimeter + "."
    return mysamplerectangle;
;}

/* Problem Number 5 */