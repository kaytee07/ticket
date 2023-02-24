import { Component } from 'react';
import './App.css';

class App extends Component {
        constructor(){
            super()
          this.state = {
            slip_header:{
              slipname:"",
              base:""
            },
            time_date_code:{
              time:"",
              date:"",
              code:""
            },
            slip_main:{
              selected_teams:"",
              day:"",
              date:"",
              time:"",
              prediction_name:"",
              prediction:"",
              odds:""
            },
            slips:[],
            financials:{
              payment:"",
              possible_profit:"",
              total_odds:""              
            },
            isSubmit: 0

          }

        }

// get the name  of the slip from user input
      handleSlipName = (e) => {
        this.setState({
          slip_header:{
            ...this.state.slip_header,
            slipname: e.target.value
          }
        })

        console.log(this.state.slip_header.slipname)
      }

      // get the name  of the slip from user input
      handleBase = (e) => {
        this.setState({
          slip_header:{
            ...this.state.slip_header,
            base: e.target.value
          }
        })
      }

      handleDate = (e) => {
        this.setState({
          time_date_code:{
            ...this.state.time_date_code,
            date: e.target.value
          }
        })
      }

      handleCode = (e) => {
        this.setState({
          time_date_code:{
            ...this.state.time_date_code,
            code: e.target.value
          }
        })
      }

      handletime = (e) => {
        this.setState({
          time_date_code:{
            ...this.state.time_date_code,
            time: e.target.value
          }
        })
        console.log(this.state.time_date_code.time)
      }

      handleBothTeams = (e) => {
        this.setState({
          
          slip_main:{
            ...this.state.slip_main,
            selected_teams: e.target.value
          }
        })
        console.log(this.state.slip_main.selected_teams)
      }

      handleDayI = (e) => {
        this.setState({
          slip_main:{
            ...this.state.slip_main,
            day: e.target.value
          }
        })
      }

      handleDateI = (e) => {
        this.setState({
          slip_main:{
            ...this.state.slip_main,
            date: e.target.value
          }
        })
      }

      handleTimeI  = (e) => {
        this.setState({
          slip_main:{
            ...this.state.slip_main,
            time: e.target.value
          }
        })
      }

      handlePredName = (e) => {
        this.setState({
          slip_main:{
            ...this.state.slip_main,
            prediction_name: e.target.value
          }
        })
      }

      handlePredI = (e) => {
        this.setState({  
          slip_main:{
            ...this.state.slip_main,
            prediction: e.target.value
          }
        })
      }

      handleOdds = (e) => {
        this.setState({
          slip_main:{
            ...this.state.slip_main,
            odds: e.target.value
          }
        })
        console.log(this.state.slip_main.odds)
      }

      handlePayment = (e) => {
        this.setState({
          financials:{
            ...this.state.financials,
            payment: e.target.value
          }
        })
      }

      handlePossibleProfit = (e) => {
        this.setState({
          financials:{
            ...this.state.financials,
            possible_profit: e.target.value
          }
        })
      }

      handleTotalOdds = (e) => {
        this.setState({
          financials:{
            ...this.state.financials,
            total_odds: e.target.value
          }
        })
      }

      handleAddPrediction = (e) => {
        e.preventDefault();
        this.setState({
          ...this.state.slips,
           slips:this.state.slips.concat(this.state.slip_main),
           slip_main:{
            selected_teams:"",
              day:"",
              date:"",
              time:"",
              prediction_name:"",
              prediction:"",
              odds:""
           }
        })
        console.log(this.state.slips)
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
          ...this.state.isSubmit,
          isSubmit: 1
        })
      }

     

  render()
  {
  return (
    <div className="App">
      <form className='bet-type' >
      <div className='headers'>
        <div className='h_slipname h'>
          <label htmlFor='bet_slip_name'>Betslip name</label>
          <input 
          id='bet_slip_name' 
          type="text"
          onChange={this.handleSlipName} 
          />
        </div>
      <div className='h_base h'>
        <label htmlFor='base'>base</label>
        <input
        id='base' 
        type="text"
        onChange={this.handleBase} 
        />
      </div>
      </div>
      <div className='time_date_code'>
        <div className='tdc_time tdc'>
          <label htmlFor='time'>time</label>
          <input
           id='time'
           type="text"
           onChange={this.handletime}
           value={this.state.time_date_code.time}
           />
        </div>
        <div className='tdc_date tdc'>
          <label htmlFor='date'>date</label>
          <input
           id ='date'
           type="text"
           onChange={this.handleDate}
           value={this.state.time_date_code.date}
           />
        </div>
        <div className='tdc_code tdc'>
        <label htmlFor='code'>code</label>
        <input 
          id='code' 
          type="text" 
          onChange={this.handleCode}
          value={this.state.time_date_code.code}
          />
        </div>
      </div>
      <div className='bet_slip'>
        <div className='bs_bothteams bs'>
        <label htmlFor='both_teams'>teams playing</label>
        <input 
        id="both_teams"
        type="text"  
        placeholder="separate teams with -"
        onChange={this.handleBothTeams}
        value={this.state.slip_main.selected_teams}
        />
        </div>
        <div className='bs_day bs'>
          <label htmlFor='day_i'>day</label>
          <input 
          id='day_i' 
          type="text" 
          onChange={this.handleDayI}
          value={this.state.slip_main.day}
          />
        </div>
        <div className='bs_date bs'>
          <label htmlFor='date_i'>date</label>
          <input 
          id="date_i" 
          type="text"
          onChange={this.handleDateI} 
          value={this.state.slip_main.date}
          />
        </div>
        <div className='bs_time bs'>
         <label htmlFor='time_i'>time</label>
          <input 
          id="time_i" 
          type="text"
          onChange={this.handleTimeI} 
          value={this.state.slip_main.time}
          />
        </div>
        <div className='bs_predname bs'>
          <label htmlFor='pred_name'>prediction name</label>
          <input 
          id="pred_name" 
          type="text" 
          onChange={this.handlePredName}
          value={this.state.slip_main.prediction_name}
          />
        </div>
        <div className='bs_pred bs'>
          <label htmlFor='pred_i'>prediction</label>
          <input 
          id="pred_i" 
          type="text" 
          onChange={this.handlePredI}
          value={this.state.slip_main.prediction}
          />
        </div>
        <div className='bs_odds bs'>
          <label htmlFor="odds">odds</label>
          <input 
          id="odds" 
          type="text"
          value={this.state.slip_main.odds} 
          onChange={this.handleOdds}
          />
        </div>      
        <div className='add_button'>
          <button onClick={this.handleAddPrediction}>
          add
         </button>
        </div>
     
      </div>

      <div className='total_amount'>
        <div className='ta_payment ta'>
          <label htmlFor='payment'>payment</label>
        <input
        id='payment' 
        type="text"  
        placeholder='separate teams with -'
        onChange={this.handlePayment}
        value={this.state.financials.payment}
        />
        </div>
      
      <div className='ta_profit ta'>
        <label htmlFor='profit'>possible profit</label>
        <input
        id='profit' 
        type="text"
        onChange={this.handlePossibleProfit}
        value={this.state.financials.possible_profit}
        />
      </div>

      <div className='ta_odds ta'>
          <label htmlFor='total_odds'>total odds</label>
          <input 
          id='total_odds' 
          type="text" 
          onChange={this.handleTotalOdds}
          value={this.state.financials.total_odds}
          />
      </div>
      </div>
      <div>
        <div className='barcode'>

        </div>
        <div className='warning'>

        </div>
      </div>
      <div className='submit_button'>
        <button onClick={this.handleSubmit}>
          submit
          </button>
      </div>
      </form>

      <div className=''>

      </div>
      
        {this.state.isSubmit === 1 ?
        <div className='ticket'>
        <div>
        <h2 className='header'>
          {this.state.slip_header.slipname}
        </h2>
        <p className='base'>
          {this.state.slip_header.base}
        </p>
        </div> 
        <div className='time_of_ticket'>
            <p className='tot_code tot'> 
            {this.state.time_date_code.code}
            </p>
            <p className='tot_date tot'> 
            {this.state.time_date_code.date}
            </p>
            <p className='tot_time tot'> 
            {this.state.time_date_code.time}
            </p>
        </div>
        <div className='black1 blk'>
        </div>
        <div className='matches'>
          {
          this.state.slips.map( (match, index) => {
           return (
             <div key={index}>
              <div className='teams_playing'>
               <h5>{match.selected_teams}</h5>
              </div>
              <div key={index} className="info">
                <p className='day ab'>
                  {match.day}
                </p>
                <p className='date ab'>
                  {match.date}
                </p>
                <p className='time ab'>
                  {match.time}
                </p>
                <p className='prediction_name_o ab'>
                  {match.prediction_name}
                </p>
                <p className='prediction_o ab'>
                  {match.prediction}
                </p>
                <p className='odd ab'>
                  {match.odds}
                </p>
              </div>
              </div>
            )
          })
          }
        </div>
        <div className='black1 blk'>
        </div>
        <div className='payment_profit_odds'>
          <div className='payment_ppo ppo'>
            <p>payment:</p>
            <p>{this.state.financials.payment}</p>
          </div>
          <div className='possible_profit_ppo ppo'>
            <p>possible profit:</p>
            <p>Total oods:</p>   
          </div>
          <div className='odds_ppo ppo'>
          <p>{this.state.financials.possible_profit}</p>
          <p>{this.state.financials.total_odds}</p>
          </div>
        </div>
        </div>
        :
      " "
      }
        
       

     

    </div>
  );
  }
}

export default App;
