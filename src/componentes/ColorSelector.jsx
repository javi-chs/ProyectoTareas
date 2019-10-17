import React, {Component} from 'react'
import { CirclePicker } from 'react-color'

class ColorSelector extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPicker: false,
        }
        }
        btnClicked= ()=>{
            this.setState({showPicker: !this.state.showPicker})
        }
        myFunction= (ev)=>{ console.log(ev);}

    render(){
        if(this.state.showPicker){
           return <div>
                    <button className="myButton" onClick={this.btnClicked}>Color</button>
                    <CirclePicker onChange={(ev)=>{ this.props.onColorSelected(ev)}}></CirclePicker>
                  </div>
        }
        else{
            return <div>
                    <button className="myButton" onClick={this.btnClicked}>Color</button>
                    </div>
        }
    }

}
export default ColorSelector