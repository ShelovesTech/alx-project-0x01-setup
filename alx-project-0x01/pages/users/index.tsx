import {GetStaticProps, NextPage } from "next";
import UserCard from "@/components/commom/UserCard";
import {User} from "@/type/User"

interface UserPageProps {
    users:user[];
}

const UserPage: NextPage<UsersPageProps> = ({ users}) => {
    return (
        <div className="p-4">
           <h1 className="rext-2*1 font-bold mb-4">Users</h1>
           {users.map((user) => (
           <userCard key={user.id} user={user} />
       ) )} 
       </div>
    );
};


export async function getstaticprops() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
     return {
        props: {
            posts
        }
     }
}

export default UserCard;