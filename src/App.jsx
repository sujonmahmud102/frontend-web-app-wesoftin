import { useDispatch } from 'react-redux'
import './App.css'
import UserList from './components/UserList/UserList';
import { setUsers } from './Redux/features/user/userSlice';
import { useContext, useEffect } from 'react';
import { ContextUser } from './contextApi/ProviderContext';

const App = () => {
  const dispatch = useDispatch();
  const { setShareUsers } = useContext(ContextUser);


  useEffect(() => {
    const url = './user.json'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setShareUsers(data);
        dispatch(setUsers(data));
      })
  }, [])


  return (
    <div className='m-10'>
      <UserList />
    </div>
  )
}

export default App
