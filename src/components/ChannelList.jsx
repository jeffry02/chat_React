import Channel from './Channel'

export default function ChannelList({channels}) {
  return (
    <div className="flex-1 space-y-4 overflow-y-scroll p-4">
      {channels.map((item) => (
        <Channel key={item.id} params={item} />
      ))}
    </div>
  )
}
