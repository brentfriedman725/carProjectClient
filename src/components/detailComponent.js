import React, { Component } from "react";
import DetailService from "../services/detailService";
import UserService from "../services/userService";
export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: null, // list of all the makes
      model: null,
      trim: null,
      selectedMake: null,
      selectedModel: null,
      selectedTrim: null,
      result: null,
      display: null,
      show: null
    };
  }
  async componentDidMount() {
    UserService.getCarsInit().then(
      response => {
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
    await DetailService.getMakes().then(res => {
      this.state.make = res.data;
      const select = document.getElementById("selectMake");
      for(var i = 0; i < this.state.make.length; i++) {
          var opt = this.state.make[i];
          if (document.getElementById(opt)) {
            console.log("yes")
            continue;
          }
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          el.id = opt;
          select.appendChild(el);
      }
    }).catch(err => {
      console.log(err);
    })

  
  }
  /* Sets state and re-populates makes dropdown to include cars added in real-time. Then, populates the model dropdown. */
  async changeMake(event) {
    this.setState({model: null, selectedMake: null});
    this.setState({selectedMake: event.target.value});
    await this.setState({model: DetailService.getModels(event.target.value)});
    await DetailService.getMakes().then(res => {
      this.state.make = res.data;
      const select = document.getElementById("selectMake");
      for(var i = 0; i < this.state.make.length; i++) {
          var opt = this.state.make[i];
          if (document.getElementById(opt)) {
            continue;
          }
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          el.id = opt;
          select.appendChild(el);
          
      }
    }).catch(err => {
      console.log(err);
    })
    await this.populateModel();
  }


  async changeModel(event) {
    this.setState({selectedModel: event.target.value});
    await this.setState({trim: DetailService.getTrim(this.state.selectedMake, event.target.value)})
    await this.populateTrim();
  }


  changeTrim(event) {
    this.setState({selectedTrim: event.target.value});
  }
  /* Populates the model dropdown. */
  async populateModel() {
    await DetailService.getModels(this.state.selectedMake).then(res => {
      this.state.model = res.data;
      this.clearModel();
      this.clearTrim();
      const select = document.getElementById("selectModel");
      for(var i = 0; i < this.state.model.length; i++) {
          var opt = this.state.model[i];
          var el = document.createElement("option");
          el.textContent = opt;
          el.value = opt;
          select.appendChild(el);
      }
    }).catch(err => {
      console.log(err);
    })

  }
  /* Populates the trim dropdown.*/
  async populateTrim() {
    await DetailService.getTrim(this.state.selectedMake, this.state.selectedModel).then(res => {
      this.state.trim = res.data;
    }).catch(err => {
      console.log(err);
    })
    const select = document.getElementById("selectTrim");
    while (select.lastChild.id !== "trim") {
      select.removeChild(select.lastChild);
    }
    for(var i = 0; i < this.state.trim.length; i++) {
        var opt = this.state.trim[i];
        if (opt === "") {
          opt = "Default"
        }
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
  }

  /* Clears the model dropdown. This occurs when user selects a new make.*/
  clearModel() {
    const select = document.getElementById("selectModel");
    while (select.lastChild.id !== "model") {
      select.removeChild(select.lastChild);
    }
  }

  /* Clears the model dropdown. This occurs when user selects a new make/model.*/
  clearTrim() {
    const select = document.getElementById("selectTrim");
    while (select.lastChild.id !== "trim") {
      select.removeChild(select.lastChild);
    }
  }
  /* Submits the given data. */
  async submit() {
    const make = this.state.selectedMake;
    const model = this.state.selectedModel;
    var trim = this.state.selectedTrim;
    if (make && model && trim) {
      await DetailService.getResults(make, model, trim)
      .then((res) => {
        this.state.result = res.data[0]
        this.setState({show: true});
        const disp = this.makeDisplay()
        this.setState({display: disp})
        console.log(this.state.result);
      }).catch(err => {
        console.log(err);
      })
    }

  }
  /* Creates the resulting display of data. */
  makeDisplay() {
    const res = this.state.result;
    return (
`Model ID: 
Make: ${res.model_make_id}
Model: ${res.model_name}
Trim: ${res.model_trim}
Year: ${res.model_year}
Body: ${res.model_body}
Engine position: ${res.model_engine_position}
Engine CC: ${res.model_engine_cc}
Engine cylinders: ${res.model_engine_cyl}
Engine type: ${res.model_engine_type}
Engine valves per cylinder: ${res.model_engine_valves_per_cyl}
Engine power PS: ${res.model_engine_power_ps}
Engine power RPM: ${res.model_engine_power_rpm}
Engine torque NM: ${res.model_engine_torque_nm}
Engine torque RPM: ${res.model_engine_torque_rpm}
Engine bore MM: ${res.model_engine_bore_mm}
Engine stroke MM: ${res.model_engine_stroke_mm}
Engine compression: ${res.model_engine_compression}
Engine fuel: ${res.model_engine_fuel}
Top speed KPH: ${res.model_top_speed_kph}
0-to-100 KPH: ${res.model_0_to_100_kph}
Drive: ${res.model_drive}
Transmission type: ${res.model_transmission_type}
Seats: ${res.model_seats}`)
    
  }




  render() {
    return (
      <div className="container">
          <div className="row">
              <h2>Filter Cars by Make, Model, and Trim</h2>
              <div className="form-group">
                  <label style={styles.lbl}>Make</label>
                  <select id="selectMake" className="form-select" placeholder="Make" value={this.state.selectedMake} onChange={(event) => this.changeMake(event)}>
                      <option id="make">Make</option>
                  </select>
                </div>
              <div className="form-group">
                  <label style={styles.lbl}>Model</label>
                  <select id="selectModel" className="form-select" placeholder="Model" value={this.state.model} onChange={(event) => this.changeModel(event)}>
                      <option id="model">Model</option>
                  </select>
              </div>
              <div className="form-group">
                  <label style={styles.lbl}>Trim</label>
                  <select id="selectTrim" className="form-select" placeholder="Trim" value={this.state.selectedTrim} onChange={(event) => this.changeTrim(event)}>
                      <option id="trim">Trim</option>
                  </select>
              </div>
          <button onClick= {() => this.submit()} type="submit" className="btn btn-success" style={styles.btn}>Submit</button>
        </div>
        <div>
          {this.state.show && <pre style={styles.result}>{this.state.display}</pre>}
        </div>
    </div>
    );
  }
}
const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  },
  result: {
    marginTop: 50,
    marginBottom: 15,
  }
};