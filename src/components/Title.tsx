import { Helmet } from "react-helmet-async";

export default function Title({ title = "Redux" }: { title: string }) {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
};