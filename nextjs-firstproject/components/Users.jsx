"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {

    const router = useRouter();

    return(
        <div>
            <ul>
            {
                users.map((user, index) => (
                <li key={index}
                    onClick={() => router.push(`/users/${user.id}`)}
                >
                    <div>
                    <h5>{user.id} {user.first_name} {user.last_name}</h5>
                    <p>{user.email}</p>
                    </div>
                    <img src={user.avatar} alt={user.email} />
                </li>
                ))
            }
            </ul>
        </div>
    )
};

export default Users;