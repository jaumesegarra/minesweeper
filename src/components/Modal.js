import React from 'react';

import './Modal.scss';

class Modal extends React.PureComponent {

	constructor(props){
		super(props);

		this.state = {
			show: false,
			closeable: true
		}
	}

	show = () => {
		this.setState({show: true});
	}

	hide = () => {
		this.setState({show: false});
	}

	renderContent() {
		return null
	}

  	render = () => {
  		return (
  		    <div className="modalWrapper">
	  			{this.state.show && 
	  				<div>
		  				<div className="modalBackground" onClick={(this.state.closeable ? this.hide : null)}></div>
		  				<div className="modal">
		  					{ this.state.closeable && 
								<a href="#closeModal" className="close" onClick={e => {e.preventDefault(); this.hide() }}>x</a>
		  					}
		  					{ this.renderContent() }
						</div>
					</div>
	  			}
  			</div>
  		);
  	}

}

export default Modal;