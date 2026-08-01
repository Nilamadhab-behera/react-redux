
interface MenuProps {
    key: string;
    label: string;
    link: string
};

export const menuList: MenuProps[] = [
    {
        key: "dashbored",
        label: "Dashbored",
        link: "/",
    },
    {
        key: "redux",
        label: "Redux",
        link: '/redux-learning'
    }
];