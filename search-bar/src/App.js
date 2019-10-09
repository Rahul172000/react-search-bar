import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Route from 'react-router-dom/Route'
import {Link} from "react-router-dom"

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}*/

class App extends React.Component
{
  constructor()
  {
    super();
    this.state={
      flower:"",
      suggestion:[],
      list:[
        {
          name:"aconitum",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Aconitum_degenii.jpg/128px-Aconitum_degenii.jpg"
        },
        {
          name:"african daisy",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/WhiteGazania.JPG/128px-WhiteGazania.JPG"
        },
        {
          name:"agapanthus",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Agapanthus_Postbloom.jpg/256px-Agapanthus_Postbloom.jpg"
        },
        {
          name:"ageratum houstonianum",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ageratum_houstonianum_%27Blue_Mink%27_%28Compositae%29_flowers.JPG/128px-Ageratum_houstonianum_%27Blue_Mink%27_%28Compositae%29_flowers.JPG"
        },
        {
          name:"alstroemeria",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Alstroemeria_aurea_%27Saturne%27.jpg/128px-Alstroemeria_aurea_%27Saturne%27.jpg"
        },
        {
          name:"alyssum",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Iceland_Plants_4911.JPG/128px-Iceland_Plants_4911.JPG"
        },
        {
          name:"amaranthus",
          url:"https://upload.wikimedia.org/wikipedia/commons/b/b3/Amaranthus_tricolor2.jpg"
        },
        {
          name:"amaryllis",
          url:"https://www.all-my-favourite-flower-names.com/images/128xNx800px-Amaryllis_hippeastrum_-_Candy_floss.jpg.pagespeed.ic.6UhpYa7xqv.jpg"
        },
        {
          name:"daffodil",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/20140226Narcissus_pseudonarcissus2.jpg/128px-20140226Narcissus_pseudonarcissus2.jpg"
        },
        {
          name:"day lily",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Day_Lily_at_the_church.JPG/128px-Day_Lily_at_the_church.JPG"
        },
        {
          name:'desert rose',
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/%22Adenium_obesum%22_Also_known_by_the_names_%22Sabi_Star%2C_Kudu%2C_Mock_Azalea%2C_Impala_Lily_%26_Desert-rose.jpg/128px-%22Adenium_obesum%22_Also_known_by_the_names_%22Sabi_Star%2C_Kudu%2C_Mock_Azalea%2C_Impala_Lily_%26_Desert-rose.jpg"
        },
        {
          name:'lavendar',
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lavender_flower_with_discrete_blossoms.jpg/128px-Lavender_flower_with_discrete_blossoms.jpg"
        },
        {
          name:'lilac',
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lavender_flower_with_discrete_blossoms.jpg/128px-Lavender_flower_with_discrete_blossoms.jpg"
        },
        {
          name:'lotus',
          url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sacred_lotus_Nelumbo_nucifera.jpg/128px-Sacred_lotus_Nelumbo_nucifera.jpg'
        },
        {
          name:'love in the mist',
          url:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Nigella_damascena_1-OB9.jpg/128px-Nigella_damascena_1-OB9.jpg'
        },
        {
          name:"lupin",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Lupinus_latifolius_6013.JPG/256px-Lupinus_latifolius_6013.JPG"
        },
        {
          name:'queen of the meadow',
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/AbeilleReineDesPr%C3%A9s.jpg/128px-AbeilleReineDesPr%C3%A9s.jpg"
        },
        {
          name:"quince",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kornik_Arboretum_pigwowiec_1.jpg/128px-Kornik_Arboretum_pigwowiec_1.jpg"
        },
        {
          name:"hibiscus",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hibiscus_pink.jpg/128px-Hibiscus_pink.jpg"
        },
        {
          name:"honestly",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hibiscus_pink.jpg/128px-Hibiscus_pink.jpg"
        }
      ]
    }
    this.onchange=this.onchange.bind(this);
  }

  onchange(event)
  {
    this.setState({suggestion:[],flower:""})
    let {value,name}=event.target;
    value=value.toLowerCase();
    this.setState({[name]:value});
    if(value===''){return}
    let arr=this.state.list.map((item)=>{
      let result=item.name.search(value);
      let len=value.length;
      if(result!=-1)
      {
        return(<Link key={item.name} to={`/detail/${item.name}`} onClick={()=>{this.setState({flower:item.name})}} exact strict className="dropdown-item">
          {item.name.substring(0,result)}<b>{item.name.substring(result,result+len)}</b>{item.name.substring(result+len,item.name.length)}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={item.url} style={{width:"10%"}}/>
        </Link>)
      }
      else
      {return null;}
    })  
    this.setState({suggestion:arr});   
  }

  render()
  {
    return(
      <React.Fragment>
        <div className="text-center">
          <br/><br/>
          <input style={{transform:"scale(2)",width:"15%"}} value={this.state.flower} type="text" placeholder="TYPE THE FLOWER NAME" name="flower"onChange={this.onchange}/>
          <br/><br/>
          <div className="dropown-menu border" style={{width:"30%",marginLeft:"35%"}}>
            {this.state.suggestion}
          </div>
          <br/>
          <Link to={`/detail/${this.state.flower}`} exact><button>GO</button></Link>
          <br/><br/>
        </div>
        {/*<div className='container'>
          <Link to="/detail/Aconitum" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Aconitum</b></div></div></Link><br/>
          <Link to="/detail/African Daisy" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>African Daisy</b></div></div></Link><br/>
          <Link to="/detail/Agapanthus" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Agapanthus</b></div></div></Link><br/>
          <Link to="/detail/Ageratum houstonianum" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Ageratum houstonianum</b></div></div></Link><br/>
          <Link to="/detail/Alstroemeria" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Alstroemeria</b></div></div></Link><br/>
          <Link to="/detail/Alyssum" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Alyssum</b></div></div></Link><br/>
          <Link to="/detail/Amaranthus" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Amaranthus</b></div></div></Link><br/>
          <Link to="/detail/Amaryllis" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}><b>Amaryllis</b></div></div></Link><br/>
          <Link to="/none" exact><div className="row"><div className="col text-center" style={{fontSize:"20pt"}}>NONE</div></div></Link>
        </div>*/}
        
        <Route path='/detail/:name' exact strict render={(url)=>{
          let obj=null;
          for(let i of this.state.list)
          {
            if(i.name===url.match.params.name)
            {
              obj=i;
              break;
            }
          }
          if(obj===null)
          {
            return(
              <h2 className='text-center'>NO SUCH FLOWER</h2>
            )
          }
          return(
            <React.Fragment>
              <hr/><hr/><hr/><hr/>
              <h2 className='text-center'>{obj.name}</h2>
              <div class="text-center"><img src={obj.url}/></div>
            </React.Fragment>
          )
        }}/>
        <Route path="/none" exact strict render={()=>{
          return null;
        }}/>
        <br/><br/>
      </React.Fragment>
    )
  }
}

export default App;
