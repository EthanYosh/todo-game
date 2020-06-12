import React from 'react';


class Dashboard extends React.Component {

  state = {


    date: new Date(),
    time: new Date(),


  };



  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  tick() {
    this.setState({ time: new Date() });
  }
  
  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }








  render() {
    return (
      <span>
        <div className="greeting">
          <h1>{this.props.greeting}</h1>
          <h1>It is {this.state.time.toLocaleTimeString()}</h1>
          <h1> Today is{" "} {this.state.date.toLocaleDateString(undefined, {
              year: `numeric`,
              month: `long`,
              day: `numeric`,
            })}
          </h1>
        </div>
      </span>
    );
  }
}


export default Dashboard;