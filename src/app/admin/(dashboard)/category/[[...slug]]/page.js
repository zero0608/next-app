import CateLayout from "./cateLayout";
import CateList from "./cateList";

export const dynamic = 'force-dynamic';
export default function Page({ params }) {
    console.log(params)
    return (
        <CateLayout>
            <CateList />
        </CateLayout>
    );
}