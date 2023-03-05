export interface TodoType{
    id:number,
    title:string,
    status:boolean
}

export enum status {
    PENDING="PENDING",
    COMPLETED="COMPLETED"
}