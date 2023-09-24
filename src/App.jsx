import { useDispatch } from 'react-redux'
import './App.css'
import UserList from './components/UserList/UserList';
import { useEffect } from 'react';
import { fetchUsers } from './Redux/features/user/userSlice';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    const url = './user.json'
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        dispatch(fetchUsers(data))
      })
  }, [dispatch])


  return (
    <div className='m-10'>
      <UserList />
    </div>
  )
}

export default App
