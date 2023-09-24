import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const DetailView = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const url = '/user.json'
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const user = users.find(u => u.id == id);

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-base-200">
            {
                users.length === 0 && < div >
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            }
            {
                users.length > 0 &&
                <div className="bg-white border rounded-lg p-4 shadow-lg md:w-1/3">
                    <Link to="/">
                        <button className="btn btn-sm normal-case text btn-outline">🔙  Back </button>
                    </Link>
                    <img
                        src={user?.profilePicture}
                        alt={`${user?.name}'s profile`}
                        className="w-24 h-24 rounded-full mx-auto mb-4"
                    />

                    <div className="">
                        {/* personal info */}
                        <h2 className="text-xl font-semibold text-gray-600">Personal Info:</h2>
                        <div>
                            <div className="flex items-center justify-between text-md font-medium text-gray-800 my-1">
                                <h2>Name:</h2>
                                <h2>{user?.name}</h2>
                            </div>

                            <div className="flex items-center justify-between text-md font-medium text-gray-800 my-1">
                                <h2>Email:</h2>
                                <h2>{user?.email} </h2>
                            </div>

                            <div className="flex items-center justify-between text-md font-medium text-gray-800 my-1">
                                <h2>Phone:</h2>
                                <h2>{user?.phone} </h2>
                            </div>

                            <div className="flex items-center justify-between text-md font-medium text-gray-800 my-1">
                                <p> Website:</p>
                                <p className="text-blue-500 hover:underline">{user?.website}  </p>
                            </div>

                            {/* work details */}
                            <h2 className="text-xl font-semibold text-gray-600 my-2">Work Details:</h2>

                            <div className="flex items-center justify-between">
                                <p> Company Name:</p>
                                <p> {user?.company?.name}</p>
                            </div>

                            <div className="lg:flex items-center justify-between">
                                <p>Type:</p>
                                <p className="text-gray-500"> {user?.company?.catchPhrase}</p>
                            </div>
                            <div className="lg:flex items-center justify-between">
                                <p>Business Strategy:</p>
                                <p className="text-gray-500"> {user?.company?.bs}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div >
    );
};

export default DetailView;