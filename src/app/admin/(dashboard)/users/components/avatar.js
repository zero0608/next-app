"use client"

import { Avatar } from "@material-tailwind/react";

export default function AvatarUser(username) {
    return <Avatar src = "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg" alt={username} size="sm"/>
}