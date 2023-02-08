const element = (
  // Write your code here.
  <div className="container">
    <div>
      <h1 className="heading">Congratulations</h1>
    </div>
    <div>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      ;<h1 className="head">Kiran V</h1>
      <p>Vishnu Institute Of Computer Education and technology ,Bhimavaram </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
      ;
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
