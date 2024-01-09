


const HostInfo = ({ host }) => {
  return (
    <div className="host-info">
      <div className="host-info__name">{host.name}</div>
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};
export default HostInfo;