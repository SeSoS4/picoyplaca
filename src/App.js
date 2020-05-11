import React, { Component } from 'react';
import './App.css';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      plate: null,
      date: null,
      time: null,
      resp: null
    }

    this.platePredictor = this.platePredictor.bind(this);
    this.change = this.change.bind(this);
  }

  // function to manage input text change
  change(event){
    if (event.target.id === 'plate'){
      this.setState({ plate:event.target.value });
    }
    if (event.target.id === 'date'){
      this.setState({ date:event.target.value});
    }
    if (event.target.id === 'time'){
      this.setState({ time:event.target.value });
    }
  }

  //function to predict "Pico y Placa" with the given Plate, Date, Time
  platePredictor(){
    if (this.state.plate != null && this.state.date != null && this.state.time != null) {
      var plate = this.state.plate.split("");

      if (plate.length > 6 ) {
        var date = new Date(this.state.date+" "+this.state.time);
        var dayName = days[date.getDay()];

        var time = this.state.time.split(":");

        // time to consider from 05:00 am to 08:00 pm (Quito, Ecuador "Pico y placa")
        // from Monday to Friday: "1","2" Monday "3","4" Tuesday "5","6" Wednesday "7","8" Thursday "9","0" Friday

        if (time[0] > 4 && time[0] < 20) {
          switch(dayName){
            case 'Monday':
              if (plate[plate.length-1] == '1' || plate[plate.length-1] == '2') {
                this.setState({resp:'you have "Pico y Placa"\n'+date});
              }else{
                this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              }
              break;
            case 'Tuesday':
              if (plate[plate.length-1] == '3' || plate[plate.length-1] == '4') {
                this.setState({resp:'you have "Pico y Placa"\n'+date});
              }else{
                this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              }
              break;
            case 'Wednesday':
              if (plate[plate.length-1] == '5' || plate[plate.length-1] == '6') {
                this.setState({resp:'you have "Pico y Placa"\n'+date});
              }else{
                this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              }
              break;
            case 'Thursday':
              if (plate[plate.length-1] == '7' || plate[plate.length-1] == '8') {
                this.setState({resp:'you have "Pico y Placa"\n'+date});
              }else{
                this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              }
              break;
            case 'Friday':
              if (plate[plate.length-1] == '9' || plate[plate.length-1] == '0') {
                this.setState({resp:'you have "Pico y Placa"\n'+date});
              }else{
                this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              }
              break;
            case 'Sunday': case 'Saturday':
              this.setState({resp:'you do not have "Pico y Placa"\n'+date});
              break;

            default:
              alert("Error in the input");
              break;
          }
        }else{
          this.setState({resp:'you do not have "Pico y Placa"\n'+date});
        }
      }else{
        alert("Set a valid plate");
      }
    }else{
      alert("Set a valid Input");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> "Pico y Placa" predictor (Quito, Ecuador)</p>
          <label>LICENSE PLATE NUMBER</label>
          <input id="plate" placeholder="ABC-0123" onChange={this.change}/>
          <label>DATE</label>
          <input id="date" placeholder="2020-01-01" onChange={this.change}/>
          <label>TIME</label>
          <input id="time" placeholder="17:00:00" onChange={this.change}/>
          <br/>
          <button onClick={this.platePredictor}>SEND</button>
          <br/>
          <p>{this.state.resp}</p>
        </header>
        <footer>
          <p>by Sebastian Solis</p>
        </footer>
      </div>
    );
  }
}

export default App;
