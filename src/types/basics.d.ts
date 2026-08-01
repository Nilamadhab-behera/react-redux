
export interface MenuProps {
    key: string;
    label: string;
    link: string
};

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
};

export type DataViewProps = {
    user: User[]
};