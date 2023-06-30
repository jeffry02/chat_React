import {Outlet, redirect, useLoaderData} from 'react-router-dom'

import ContactList from '../components/ContactList'
import {AuthContext} from '../context/auth.context'
import ky from '../utils/ky'
import ChannelList from '../components/ChannelList'

export async function loader() {
  try {
    const user = await ky.get('user').json()
    const users = await ky.get('users').json()
    const channels = await ky.get('channels').json()

    return {
      user,
      users: users.filter((_user) => _user.id !== user.id),
      channels,
    }
  } catch (err) {
    if (err.response.status === 401) {
      return redirect('/login')
    }
  }
}

export default function App() {
  const {user, users} = useLoaderData()
  const {channels} = useLoaderData()

  console.log(user)

  function handleLogout() {
    localStorage.removeItem('token')

    window.location.reload()
  }

  return (
    <AuthContext.Provider value={user}>
      <div className="flex h-screen">
        <div className="relative flex w-[320px] flex-col border border-gray-400">
          <div className="absolute right-0 top-[47px] h-[486px] w-[20px] border-y border-gray-400 bg-white"></div>
          <h2 className="flex h-12 items-center justify-center border-b border-gray-400 text-xl font-semibold">
            Contacts
          </h2>
          <ContactList users={users} />
          <div className="flex h-[380px] flex-col border-b border-gray-300">
            <h2 className="flex h-12 items-center justify-center border-y border-gray-400 text-xl font-semibold">
              Channels
            </h2>
            <ChannelList channels={channels} />
          </div>
          <button
            className="flex w-full items-center justify-center p-4"
            onClick={handleLogout}
            type="button"
          >
            <span users={user.name}>{user.name} <span className='text-orange-400'>Logout</span></span>
          </button>
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="flex h-12 items-center justify-center border-b border-gray-300 text-xl font-semibold">
            Messages
          </h2>
          <Outlet />
        </div>
      </div>
    </AuthContext.Provider>
  )
}
