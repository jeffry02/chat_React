import Contact from './Contact'

export default function ContactList({users}) {
  return (
    <div className="space-y-4 p-4">
      {users.map((user) => (
        <Contact key={user.id} user={user} />
      ))}
    </div>
  )
}
