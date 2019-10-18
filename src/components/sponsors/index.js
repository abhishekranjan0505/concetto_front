import React,{Component} from 'react';

class Sponsors extends Component{
    constructor(props) {
      super(props);
      const { sponsors } = props;
      this.state = {
        titles: sponsors.filter(sponsor => sponsor.is_title === 1),
        others: sponsors.filter(sponsor => sponsor.is_title === 0)
      };
    }
    render(){
        const { titles, others } = this.state;
        return(
            <div>
            <h1
              style={{
              textAlign: "center",
              marginTop: "20px"
            }}
            className="title"
            >
            TITLE SPONSORS
            </h1>
            <div className="container">
            {titles.map((title,id)=>(
                <React.Fragment key={id.toString()}>
                <div
                  class={"col-12 col-6 col-4"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                   <a
                      href={title.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <img
                    src={title.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt={loading}
                    />
                    </a>
                </div>
                </React.Fragment>
            ))}
            </div>
            <h1
              style={{
              textAlign: "center",
              marginTop: "20px"
            }}
            className="title"
            >
            OTHER SPONSORS
            </h1>
            <div className="container">
            {others.map((title,id)=>(
                <React.Fragment key={id.toString()}>
                <div
                  class={"col-12 col-6 col-4"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                   <a
                      href={title.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <img
                    src={title.img}
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    width="500"
                    height="500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    aria-label="Placeholder: 500x500"
                    alt={loading}
                    />
                    </a>
                </div>
                </React.Fragment>
            ))}
            </div>
            </div>
        )
    }
}
export default Sponsors;