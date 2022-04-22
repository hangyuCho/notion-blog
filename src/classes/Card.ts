export class Card {
    strTitle: string;
    strDescription: string;
    dateUpdateAt: Date;
    constructor(strTitle: string, strDescription: string, dateUpdateAt: Date) {
        this.strTitle = strTitle;
        this.strDescription = strDescription;
        this.dateUpdateAt = dateUpdateAt;
    }
}