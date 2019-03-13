import React from "react";
var Radius = 54;
var Circumference = 2 * Math.PI * Radius;

class MovieRow extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#333",
          color: "#ddd",
          padding: "1em",
          borderBottom: "1px solid rgba(0,0,0,.2)"
        }}
      >
        <div
          style={{
            display: "flex"
          }}
          key={this.props.movie.id}
        >
          <div>
            <img
              alt="poster"
              width="200"
              height="350"
              src={this.props.movie.poster_src}
            />
          </div>
          <div
            style={{
              textAlign: "left",
              marginLeft: "1em"
            }}
          >
            <div
              style={{
                display: "flex"
              }}
            >
              <div>
                <svg
                  width="120"
                  height="120"
                  style={{
                    transform: "rotate(-90deg)"
                  }}
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#737373"
                    strokeWidth="12"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#00cc00"
                    strokeWidth="12"
                    strokeDasharray={Circumference}
                    strokeDashoffset={
                      Circumference * (1 - this.props.movie.vote_average / 10)
                    }
                  />
                </svg>
                <span
                  style={{
                    position: "relative",
                    bottom: "49px",
                    right: "85px",
                    fontSize: 32,
                    fontWeight: "bold",
                    width: 50,
                    height: 38,
                    textAlign: "center",
                    display: "inline-block"
                  }}
                >
                  {this.props.movie.vote_average}
                </span>
              </div>
              <div>
                <strong
                  style={{
                    fontSize: 32
                  }}
                >
                  {this.props.movie.title}
                </strong>
                <br />
                {this.props.movie.release_date}
              </div>
            </div>
            <p>{this.props.movie.overview}</p>
            <br />
            <div
              style={{
                display: "flex"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
