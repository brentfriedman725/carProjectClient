import React, { Component } from "react";
import UserService from "../services/userService";
import AddCarService from "../services/addCarService";
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model_id: "",
      model_make_id: "",
      model_name: "",
      model_trim: "",
      model_year: "",
      model_body: "",
      model_engine_position: "",
      model_engine_cc: "",
      model_engine_cyl: "",
      model_engine_type: "",
      model_engine_valves_per_cyl: "",
      model_engine_power_ps: "",
      model_engine_power_rpm: "",
      model_engine_torque_nm: "",
      model_engine_torque_rpm: "",
      model_engine_bore_mm: "",
      model_engine_stroke_mm: "",
      model_engine_compression: "",
      model_engine_fuel: "",
      model_top_speed_kph: "",
      model_0_to_100_kph: "",
      model_drive: "",
      model_transmission_type: "",
      model_seats: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
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
  }
  /* Creates graphQL query and passes it to addCarService to send to backend. */
  handleSubmit = async () => {
    await this.setState({
      model_id: document.getElementById("model_id").value,
      model_make_id: document.getElementById("model_make_id").value,
      model_name: document.getElementById("model_name").value,
      model_trim: document.getElementById("model_trim").value,
      model_year: document.getElementById("model_year").value,
      model_body: document.getElementById("model_body").value,
      model_engine_position: document.getElementById("model_engine_position").value,
      model_engine_cc: document.getElementById("model_engine_cc").value,
      model_engine_cyl: document.getElementById("model_engine_cyl").value,
      model_engine_type: document.getElementById("model_engine_type").value,
      model_engine_valves_per_cyl: document.getElementById("model_engine_valves_per_cyl").value,
      model_engine_power_ps: document.getElementById("model_engine_power_ps").value,
      model_engine_power_rpm: document.getElementById("model_engine_power_rpm").value,
      model_engine_torque_nm: document.getElementById("model_engine_torque_nm").value,
      model_engine_torque_rpm: document.getElementById("model_engine_torque_rpm").value,
      model_engine_bore_mm: document.getElementById("model_engine_bore_mm").value,
      model_engine_stroke_mm: document.getElementById("model_engine_stroke_mm").value,
      model_engine_compression: document.getElementById("model_engine_compression").value,
      model_engine_fuel: document.getElementById("model_engine_fuel").value,
      model_top_speed_kph: document.getElementById("model_top_speed_kph").value,
      model_0_to_100_kph: document.getElementById("model_0_to_100_kph").value,
      model_drive: document.getElementById("model_drive").value,
      model_transmission_type: document.getElementById("model_transmission_type").value,
      model_seats: document.getElementById("model_seats").value
    })
    const data = {
      query: `mutation makeCar(
    $model_id: String,
    $model_make_id: String,
    $model_name: String,
    $model_trim: String,
    $model_year: String,
    $model_body: String,
    $model_engine_position: String,
    $model_engine_cc: String,
    $model_engine_cyl: String,
    $model_engine_type: String,
    $model_engine_valves_per_cyl: String,
    $model_engine_power_ps: String,
    $model_engine_power_rpm: String,
    $model_engine_torque_nm: String,
    $model_engine_torque_rpm: String,
    $model_engine_bore_mm: String,
    $model_engine_stroke_mm: String,
    $model_engine_compression: String,
    $model_engine_fuel: String,
    $model_top_speed_kph: String,
    $model_0_to_100_kph: String,
    $model_drive: String,
    $model_transmission_type: String,
    $model_seats: String
      ){
        makeCar(input: {
          model_id: $model_id,
          model_make_id: $model_make_id,
          model_name: $model_name,
          model_trim: $model_trim,
          model_year: $model_year,
          model_body: $model_body,
          model_engine_position: $model_engine_position,
          model_engine_cc: $model_engine_cc,
          model_engine_cyl: $model_engine_cyl,
          model_engine_type: $model_engine_type,
          model_engine_valves_per_cyl: $model_engine_valves_per_cyl,
          model_engine_power_ps: $model_engine_power_ps,
          model_engine_power_rpm: $model_engine_power_rpm,
          model_engine_torque_nm: $model_engine_torque_nm,
          model_engine_torque_rpm: $model_engine_torque_rpm,
          model_engine_bore_mm: $model_engine_bore_mm,
          model_engine_stroke_mm: $model_engine_stroke_mm,
          model_engine_compression: $model_engine_compression,
          model_engine_fuel: $model_engine_fuel,
          model_top_speed_kph: $model_top_speed_kph,
          model_0_to_100_kph: $model_0_to_100_kph,
          model_drive: $model_drive,
          model_transmission_type: $model_transmission_type,
          model_seats: $model_seats
        }){
          make
        }
      }`,
      variables: {
        model_id: this.state.model_id,
        model_make_id: this.state.model_make_id,
        model_name: this.state.model_name,
        model_trim: this.state.model_trim,
        model_year: this.state.model_year,
        model_body: this.state.model_body,
        model_engine_position: this.state.model_engine_position,
        model_engine_cc: this.state.model_engine_cc,
        model_engine_cyl: this.state.model_engine_cyl,
        model_engine_type: this.state.model_engine_type,
        model_engine_valves_per_cyl: this.state.model_engine_valves_per_cyl,
        model_engine_power_ps: this.state.model_engine_power_ps,
        model_engine_power_rpm: this.state.model_engine_power_rpm,
        model_engine_torque_nm: this.state.model_engine_torque_nm,
        model_engine_torque_rpm: this.state.model_engine_torque_rpm,
        model_engine_bore_mm: this.state.model_engine_bore_mm,
        model_engine_stroke_mm: this.state.model_engine_stroke_mm,
        model_engine_compression: this.state.model_engine_compression,
        model_engine_fuel: this.state.model_engine_fuel,
        model_top_speed_kph: this.state.model_top_speed_kph,
        model_0_to_100_kph: this.state.model_0_to_100_kph,
        model_drive: this.state.model_drive,
        model_transmission_type: this.state.model_transmission_type,
        model_seats: this.state.model_seats
      }
    }
    console.log("hi");

    AddCarService.makeCar(data).then().catch(err => {console.log(err.response)});
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Model ID:
        <input 
          type="text" 
          id="model_id"
        />
        </label>
        <label>Make:
          <input 
            type="text" 
            id="model_make_id"
            defaultValue={""}
          />
          </label>
          <label>Model:
          <input 
            type="text" 
            id="model_name"
            defaultValue={""} 
          />
          </label>
          <label>Trim:
          <input 
            type="text" 
            id="model_trim"
            defaultValue={""}
          />
          </label>
          <label>Year:
          <input 
            type="text" 
            id="model_year" 
            defaultValue={""}
          />
          </label>
          <label>Body:
          <input 
            type="text" 
            id="model_body"
            defaultValue={""}
          />
          </label>
          <label>Engine Position:
          <input 
            type="text" 
            id="model_engine_position" 
            defaultValue={""}
          />
          </label>
          <label>Engine CC:
          <input 
            type="text" 
            id="model_engine_cc"  
            defaultValue={""}
          />
          </label>
          <label>Engine Cylinders:
          <input 
            type="text" 
            id="model_engine_cyl" 
            defaultValue={""}
          />
          </label>
          <label>Engine Type:
          <input 
            type="text" 
            id="model_engine_type"  
            defaultValue={""}
          />
          </label>
          <label>Engine Valves Per Cylinder:
          <input 
            type="text" 
            id="model_engine_valves_per_cyl"  
            defaultValue={""}
          />
          </label>
          <label>Engine Power PS:
          <input 
            type="text" 
            id="model_engine_power_ps"  
            defaultValue={""}
          />
          </label>
          <label>Engine Power RPM:
          <input 
            type="text" 
            id="model_engine_power_rpm"  
            defaultValue={""}
          />
          </label>
          <label>Engine Torque NM:
          <input 
            type="text" 
            id="model_engine_torque_nm"  
            defaultValue={""}
          />
          </label>
          <label>Engine Torque RPM:
          <input 
            type="text" 
            id="model_engine_torque_rpm" 
            defaultValue={""}
          />
          </label>
          <label>Engine Bore MM:
          <input 
            type="text" 
            id="model_engine_bore_mm"  
            defaultValue={""}
          />
          </label>
          <label>Engine Stroke MM:
          <input 
            type="text" 
            id="model_engine_stroke_mm" 
            defaultValue={""}
          />
          </label>
          <label>Engine Compression:
          <input 
            type="text" 
            id="model_engine_compression" 
            defaultValue={""}
          />
          </label>
          <label>Engine Fuel:
          <input 
            type="text" 
            id="model_engine_fuel"  
            defaultValue={""}
          />
          </label>
          <label>Top Speed KPH:
          <input 
            type="text" 
            id="model_top_speed_kph" 
            defaultValue={""}
          />
          </label>
          <label>0 To 100 KPH:
          <input 
            type="text" 
            id="model_0_to_100_kph" 
            defaultValue={""}
          />
          </label>
          <label>Drive:
          <input 
            type="text" 
            id="model_drive" 
            defaultValue={""}
          />
          </label>
          <label>Transmission Type:
          <input 
            type="text" 
            id="model_transmission_type" 
            defaultValue={""}
          />
          </label>
          <label>Seats:
          <input 
            type="text" 
            id="model_seats" 
            defaultValue={""}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
}