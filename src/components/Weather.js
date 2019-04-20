import React from 'react'

export default class Weather extends React.Component {

render () {
  return(
    <div>
         
         
       { this.props.city && this.props.country && <p> Location:{this.props.city},{this.props.country}<br/></p>}
       { this.props.temperature && <p> Temperature:{this.props.temperature}<br/></p>}
       { this.props.wind && <p> Wind Speed:{this.props.wind}<br/></p>}
       { this.props.humidity && <p>Humidity:{this.props.humidity}<br/></p>}

       { this.props. description&& <p> Condtition:{this.props.description}<br/></p>}
       { this.props. error&& <p> {this.props.error}<br/></p>}




        
     

    </div>
  )
}


}