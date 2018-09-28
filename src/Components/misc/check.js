import React from 'react';

class CheckButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  
  handleClick() {
    this.setState({
      liked: !this.state.liked
    });
  }
  
  render() {
    
    const label = this.state.liked ? <i class="far fa-calendar-check"></i>: <i class="fas fa-calendar-check"></i>
    const text = this.state.liked ? 'Asistiré' : ''
    return (
      <div className="like">
        <button className="btn  orange darken-1" onClick={this.handleClick}>
          {label}</button> <span>{text}</span>
        
      </div>
    );
  }
}

export default CheckButton;