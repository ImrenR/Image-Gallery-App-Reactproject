import Card from './components/Card';
import Header from './components/Header';
import data from './data'
import './scss/App.scss'

function App() {
  console.log(data);
  return (
  
    <div>
      <Header/>
      {data.map((item)=> <Card key={item.id} src={item.src.large} photographer={item.photographer}
      />)}
    </div>

  );
}

export default App;
