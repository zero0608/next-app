'use client'

import { PlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button
} from "@material-tailwind/react";

const TABLE_HEAD = ["Index", "Name", "Description", "Action"];

export default function CateLayout({ children }) {
    return (
        <Card className="w-full flex-row h-full block">
            <CardHeader floated={false} shadow={false} className="rounded-none mt-0 pt-4">
                <div className="flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Categories list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Categories
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button className="flex items-center gap-3" size="sm">
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add Category
                        </Button>
                    </div>
                </div>
            </CardHeader>
            {children}
        </Card>
    );
}