import clsx from 'clsx'

import {useUser} from '../context/auth.context'

export default function Message({message}) {
  const user = useUser()
  const isAuthUser = user.id

  return (
    <div className={clsx('flex items-end space-x-2', {'self-end': isAuthUser})}>
      <div
        className={clsx('flex flex-col gap-y-2.5 rounded-xl p-3.5', {
          'rounded-bl-none bg-gray-100': !isAuthUser,
          'rounded-br-none bg-green-300': isAuthUser,
        })}
      >
        {!isAuthUser && (
          <span className="text-xs text-orange-500">{message.sender.name}</span>
        )}
        {message.message}
      </div>
    </div>
  )
}