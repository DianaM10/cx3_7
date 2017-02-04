var React = require('react');
var PiggyBank = React.createClass({

  getInitialState: function() {
    return { total: 0 }
  },

  propTypes: {
    title: React.PropTypes.string.isRequired,
    colour: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    depositAmount: React.PropTypes.number.isRequired
  },

  addToSavings: function() {
    var amount = document.getElementById('amount');
    this.setState({
      total: this.state.total + Number(amount.value) 
      // total: this.state.total + this.props.depositAmount
    })
  },

  withdrawFromSavings: function() {
    var amount = document.getElementById('amount');
    this.setState({
      total: this.state.total - Number(amount.value) 
      // total: this.state.total - this.props.depositAmount
    })
  },

  changeTotal: function(e) {
    this.setState({
      total: this.state.total + parseInt(e.target.value)
    })
  },

  render: function(){
    return (
      <div className="bank-box">
       <h1> {this.props.owner} {this.props.title } {this.props.colour} {this.props.depositAmount} </h1> 
       <p> Total savings: {this.state.total}</p>
       <p><input type="number" onChange={this.changeTotal} id="amount" placeholder="enter amount"/></p>
       <button onClick={this.addToSavings}>Deposit Change</button>
       <button onClick={this.withdrawFromSavings}> Withdraw</button>
      </div>
    );
  }

});

module.exports = PiggyBank;