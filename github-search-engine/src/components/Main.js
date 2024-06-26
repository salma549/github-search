import React from 'react';

function Main({ users }) {
    return (
        <center>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {users.map((user, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col items-center border p-4 rounded shadow-lg cursor-pointer hover:shadow-xl transition"
                        onClick={() => window.open(user.html_url, "_blank")}
                    >
                        <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
                        <h2 className="text-lg font-bold">{user.login}</h2>
                    </div>
                ))}
            </div>
        </center>
    )
}

export default Main;