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