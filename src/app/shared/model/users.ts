export interface Iuser {
    name: string;
    id: number;
    userRole: uRole;
}


export enum uRole {
    User,
    Admin
}