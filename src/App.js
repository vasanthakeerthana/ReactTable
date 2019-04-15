import React, { Component } from 'react';
import _ from 'lodash'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {

    super();
    
    this.state = {
        tableData:[
          {
              "name": "Steve",
              "age": 27,
              "job": "Sandwich Eater",
              "married": false
          },
          {
              "name": "Gary",
              "age": 35,
              "job": "Falafeler",
              "married": true
          },
          {
              "name": "Greg",
              "city": "Seattle",
              "job": "Jelly Bean Juggler"
          },
          {
              "name": "Jeb",
              "age": 39,
              "job": "Burrito Racer",
              "married": true
          },
          {
              "name": "Jeff",
              "age": 48,
              "job": "Hot Dog Wrangler"
          },
          {
              "name": "Jackson",
              "age": 41,
              "job": "Careful Bead Accelerator"
          },
          {
              "name": "Emma",
              "age": 83,
              "job": "Clever Beam Councillor"
          },
          {
              "name": "Aiden",
              "age": 59,
              "job": "Dead Bean Investigator"
          },
          {
              "name": "Olivia",
              "age": 60,
              "job": "Easy Bedroom Projector"
          },
          {
              "name": "Lucas",
              "age": 65,
              "job": "Famous Boot Actor"
          },
          {
              "name": "Ava",
              "age": 40,
              "job": "Gifted Bread Counsellor",
              "married": true
          },
          {
              "name": "Liam",
              "age": 52,
              "job": "Helpful Brick Investor"
          },
          {
              "name": "Mia",
              "age": 33,
              "job": "Important Brother Protector"
          },
          {
              "name": "Noah",
              "age": 65,
              "job": "Inexpensive Camp Administrator",
              "married": false
          },
          {
              "name": "Isabella",
              "age": 76,
              "job": "Cooing Chicken Decorator",
              "married": true
          },
          {
              "name": "Ethan",
              "age": 26,
              "city": "Seattle",
              "job": "Deafening Children Legislator",
              "married": true
          },
          {
              "name": "Riley",
              "age": 77,
              "job": "Faint Crook Radiator"
          },
          {
              "name": "Mason",
              "job": "Hissing Deer Auditor"
          },
          {
              "name": "Aria",
              "age": 27,
              "job": "Loud Dock Dictator",
              "married": false
          },
          {
              "name": "Caden",
              "age": 22,
              "job": "Melodic Doctor Mediator"
          },
          {
              "name": "Zoe",
              "age": 85,
              "job": "Noisy Downtown Refrigerator"
          },
          {
              "name": "Oliver",
              "age": 84,
              "job": "Round Drum Calculator"
          },
          {
              "name": "Charlotte",
              "age": 28,
              "job": "Shallow Dust Director"
          },
          {
              "name": "Elijah",
              "age": 46,
              "job": "Skinny Eye Narrator"
          },
          {
              "name": "Lily",
              "age": 47,
              "job": "Square Family Sailor"
          },
          {
              "name": "Grayson",
              "city": "Austin",
              "job": "Jolly Butter Collector"
          },
          {
              "name": "Layla",
              "age": 81,
              "job": "Kind Cast Editor",
              "married": true
          },
          {
              "name": "Jacob",
              "age": 27,
              "city": "New York City",
              "job": "Lively Cave Navigator",
              "married": false
          },
          {
              "name": "Amelia",
              "city": "Philadelphia",
              "job": "Nice Cent Spectator"
          },
          {
              "name": "Michael",
              "age": 39,
              "job": "Obedient Cherries Commentator"
          },
          {
              "name": "Emily",
              "age": 64,
              "job": "Bitter Cherry Educator"
          },
          {
              "name": "Benjamin",
              "age": 36,
              "job": "Delicious Cobweb Objector",
              "married": false
          },
          {
              "name": "Madelyn",
              "age": 61,
              "City": "Los Angeles",
              "job": "Fresh Coil Supervisor"
          },
          {
              "name": "Carter",
              "age": 68,
              "job": "Greasy Cracker Competitor",
              "married": false
          },
          {
              "name": "Aubrey",
              "age": 67,
              "city": "Chicago",
              "job": "Creepy Dinner Elevator",
              "married": false
          },
          {
              "name": "James",
              "age": 70,
              "job": "Crooked Eggnog Operator"
          },
          {
              "name": "Adalyn",
              "age": 68,
              "job": "Cuddly Elbow Surveyor"
          },
          {
              "name": "Jayden",
              "age": 70,
              "city": "Chicago",
              "job": "Curly Face Conductor",
              "married": true
          }
      ]
    }
    this.originalData = [
      {
          "name": "Steve",
          "age": 27,
          "job": "Sandwich Eater",
          "married": false
      },
      {
          "name": "Gary",
          "age": 35,
          "job": "Falafeler",
          "married": true
      },
      {
          "name": "Greg",
          "city": "Seattle",
          "job": "Jelly Bean Juggler"
      },
      {
          "name": "Jeb",
          "age": 39,
          "job": "Burrito Racer",
          "married": true
      },
      {
          "name": "Jeff",
          "age": 48,
          "job": "Hot Dog Wrangler"
      },
      {
          "name": "Jackson",
          "age": 41,
          "job": "Careful Bead Accelerator"
      },
      {
          "name": "Emma",
          "age": 83,
          "job": "Clever Beam Councillor"
      },
      {
          "name": "Aiden",
          "age": 59,
          "job": "Dead Bean Investigator"
      },
      {
          "name": "Olivia",
          "age": 60,
          "job": "Easy Bedroom Projector"
      },
      {
          "name": "Lucas",
          "age": 65,
          "job": "Famous Boot Actor"
      },
      {
          "name": "Ava",
          "age": 40,
          "job": "Gifted Bread Counsellor",
          "married": true
      },
      {
          "name": "Liam",
          "age": 52,
          "job": "Helpful Brick Investor"
      },
      {
          "name": "Mia",
          "age": 33,
          "job": "Important Brother Protector"
      },
      {
          "name": "Noah",
          "age": 65,
          "job": "Inexpensive Camp Administrator",
          "married": false
      },
      {
          "name": "Isabella",
          "age": 76,
          "job": "Cooing Chicken Decorator",
          "married": true
      },
      {
          "name": "Ethan",
          "age": 26,
          "city": "Seattle",
          "job": "Deafening Children Legislator",
          "married": true
      },
      {
          "name": "Riley",
          "age": 77,
          "job": "Faint Crook Radiator"
      },
      {
          "name": "Mason",
          "job": "Hissing Deer Auditor"
      },
      {
          "name": "Aria",
          "age": 27,
          "job": "Loud Dock Dictator",
          "married": false
      },
      {
          "name": "Caden",
          "age": 22,
          "job": "Melodic Doctor Mediator"
      },
      {
          "name": "Zoe",
          "age": 85,
          "job": "Noisy Downtown Refrigerator"
      },
      {
          "name": "Oliver",
          "age": 84,
          "job": "Round Drum Calculator"
      },
      {
          "name": "Charlotte",
          "age": 28,
          "job": "Shallow Dust Director"
      },
      {
          "name": "Elijah",
          "age": 46,
          "job": "Skinny Eye Narrator"
      },
      {
          "name": "Lily",
          "age": 47,
          "job": "Square Family Sailor"
      },
      {
          "name": "Grayson",
          "city": "Austin",
          "job": "Jolly Butter Collector"
      },
      {
          "name": "Layla",
          "age": 81,
          "job": "Kind Cast Editor",
          "married": true
      },
      {
          "name": "Jacob",
          "age": 27,
          "city": "New York City",
          "job": "Lively Cave Navigator",
          "married": false
      },
      {
          "name": "Amelia",
          "city": "Philadelphia",
          "job": "Nice Cent Spectator"
      },
      {
          "name": "Michael",
          "age": 39,
          "job": "Obedient Cherries Commentator"
      },
      {
          "name": "Emily",
          "age": 64,
          "job": "Bitter Cherry Educator"
      },
      {
          "name": "Benjamin",
          "age": 36,
          "job": "Delicious Cobweb Objector",
          "married": false
      },
      {
          "name": "Madelyn",
          "age": 61,
          "City": "Los Angeles",
          "job": "Fresh Coil Supervisor"
      },
      {
          "name": "Carter",
          "age": 68,
          "job": "Greasy Cracker Competitor",
          "married": false
      },
      {
          "name": "Aubrey",
          "age": 67,
          "city": "Chicago",
          "job": "Creepy Dinner Elevator",
          "married": false
      },
      {
          "name": "James",
          "age": 70,
          "job": "Crooked Eggnog Operator"
      },
      {
          "name": "Adalyn",
          "age": 68,
          "job": "Cuddly Elbow Surveyor"
      },
      {
          "name": "Jayden",
          "age": 70,
          "city": "Chicago",
          "job": "Curly Face Conductor",
          "married": true
      }
  ]
    this.compareBy.bind(this);
    this.handleSort.bind(this);
    this.handleChange.bind(this);

  }

  rowGenerator(d, i) {
    return (
      <tr>
        <td style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}>{d.name}</td>
        <td style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}>{d.age}</td>
        <td style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}>{d.city}</td>
        <td style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}>{d.job}</td>
        <td style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}>{d.married}</td>
      </tr>
    );
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

handleSort (clickedColumn) {

    let data = this.state.tableData
    let sorteddata=_.sortBy(data, clickedColumn)
        
    this.setState({
      tableData : sorteddata
    })
}

handleChange(e) {

   let SearchString = e.target.value 
   console.log(SearchString)
   if (e.target.value == "") {
      this.setState({
        tableData : this.originalData
      })
   } else {
    console.log("#######",this.state.tableData)
    var filRes = _.map(this.state.tableData, function(o) {
      if (o.name == SearchString) return o;
    });

    filRes = _.without(filRes, undefined)
    if (filRes.length > 0) {
      this.setState({
        tableData : filRes
      })
    }
   
   }  
} 
  
render() {
    let data = this.state.tableData
    return (
      <div className="App" >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
    <h1>Employee Table</h1>
    
   
    
    <div style={{  display: 'flex',
        alignItems: 'right',
        justifyContent: 'center'}}>
    <input
                type="text"
                onChange={this.handleChange.bind(this)}
                placeholder="Search By Name..."
              />
    </div>
    <div style={{  display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
    <table>
      <tr style={{backgroundColor: '#eeeeee'}}>
        <th style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }}  onClick={this.handleSort.bind(this,'name')}>Name</th>
        <th style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }} onClick={this.handleSort.bind(this,'age')}>Age</th>
        <th style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }} onClick={this.handleSort.bind(this,'city')}>City</th>
        <th style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }} onClick={this.handleSort.bind(this,'job')}>Job</th>
        <th style= {{border: '1px solid #dddddd',textAlign: 'left',padding: '8px' }} onClick={this.handleSort.bind(this,'married')}>Married</th>
      </tr>
      {data.length > 0 ? data.map((d, i) => this.rowGenerator(d, i)) : <div></div>}
    </table>
    </div>
    </div>
    );
  }
}

export default App;
