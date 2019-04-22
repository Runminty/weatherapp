import React from 'react'

export default class Weather extends React.Component {

render () {
  return(
    <div>
      <div className='form-content'>
            { this.props.city && this.props.country && <p> Location:{this.props.city},{this.props.country}<br/></p>}
      </div>

       <div className='temp'>
            { this.props.temperature && <p> Temperature:{this.props.temperature}<br/></p>}
            

      </div>  
      <div className='wind'>
       { this.props.wind && <p> Wind Speed:{this.props.wind}<br/></p>}
       </div>
       <div className ='humidity'>
       { this.props.humidity && <p>Humidity:{this.props.humidity}<br/></p>}
       </div>

       { this.props. description&& <p> Condtition:{this.props.description}<br/></p>}
       { this.props. error&& <p> {this.props.error}<br/></p>}
       




        
     

    </div>
  )
}


}