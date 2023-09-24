import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedUser } from '../../Redux/features/user/userSlice';


const UserList = () => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const handleSelectUser = (user) => {
        dispatch(setSelectedUser(user))
    }


    return (
        <>
            <div>
                <h2 className='text-2xl font-bold text-center underline my-5'>User List</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {users.map((user) => (
                    <div key={user.id} className="bg-base-200 border rounded-lg p-4 shadow-lg text-center">
                        <img
                            src={user.profilePicture}
                            alt={`${user.name}'s profile`}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">Name: {user.name}</h2>
                        <p className="text-gray-600 mt-2">Email: {user.email}</p>
                        <Link to={`/details/${user.id}`}>
                            <button onClick={() => handleSelectUser(user)} className='btn btn-sm btn-accent normal-case text-white mt-3'>View Details </button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UserList;