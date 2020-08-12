export class Dictator {
    FirstName: string;
    LastName: string;
    BirthDay: Date;
    Death: string;
    Description: string;

    ToString(){
        return this.FirstName + " " + this.LastName + " " + this.BirthDay + " " + this.Death + " " + this.Description;
    }
}


