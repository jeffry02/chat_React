import Channel from './Channel'

export default function ChannelList({channels}) {
  return (
    <div className="space-y-4 p-4">
      {channels.map((item) => (
        <Channel key={item.id} params={item} />
      ))}
    </div>
  )
}
