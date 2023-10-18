import UserList from "./users/components/userListServer";
import UserLayout from "./users/components/userLayout";
 
export default function Page() {
  return (
    <UserLayout>
       <UserList/>
    </UserLayout>
  );
}