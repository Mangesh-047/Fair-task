import { Observable } from "rxjs";

export interface Iproduct {
    pname: string;
    id: number;
    pstatus: pstatus;
    canReturn: 0 | 1;
}


export enum pstatus {
    inp = 'In Progress',
    dis = 'Dispatched',
    del = 'Delivered',

}


export interface IcanDeactivateComp {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}