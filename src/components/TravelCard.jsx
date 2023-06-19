export default function TravelCard(props) {
  return (
    <div className="card-container">
      <img src={props.item.imageUrl} alt="" className="card-pic" />
      <div className="content-container">
        <div className="content-header">
          <img
            src="./src/assets/maps-icon.png"
            alt="Map Pin Icon"
            className="maps-icon"
          />
          <span className="country">{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <h4 className="date">{`${props.item.startDate} - ${props.item.endDate}`}</h4>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
