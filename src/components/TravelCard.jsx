export default function TravelCard() {
  return (
    <div className="card-container">
      <img src="" alt="" className="card-pic" />
      <div className="content-container">
        <div className="content-header">
          <img
            src="./src/assets/maps-icon.png"
            alt="Map Pin Icon"
            className="maps-icon"
          />
          <span className="country"></span>
          <a href="">View on Google Maps</a>
        </div>
        <h1 className="title"></h1>
        <h4 className="date"></h4>
        <p className="description"></p>
      </div>
    </div>
  );
}
