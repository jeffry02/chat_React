import {Link} from 'react-router-dom'

export default function Contact({user}) {
  return (
    <div>
      <Link to={`/rooms/${user.id}/private`}>{user.name}</Link>
    </div>
  )
}
