// components/UserCard.tsx
import React from "react";
import { UserCard } from "@/interfaces";


const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="border rounded p-4 shadow mb-4">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-700">@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a></p>
      <p className="mt-2 font-medium">Address:</p>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city}, {user.address.zipcode}</p>
      <p className="mt-2 font-medium">Company:</p>
      <p>{user.company.name}</p>
      <p className="italic text-sm">"{user.company.catchPhrase}"</p>
    </div>
  );
};

export default UserCard;
