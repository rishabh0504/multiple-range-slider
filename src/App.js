import logo from './logo.svg';
import './App.css';
import MultiRangeSlider from './components/multi-range-slider';

const listItems = [
  {
    label: '0%',
    value: 0
  },
  {
    label: '10%',
    value: 10
  },
  {
    label: '20%',
    value: 20
  },
  {
    label: '30%',
    value: 30
  },
  {
    label: '40%',
    value: 40
  },
  {
    label: '50%',
    value: 50
  },
  {
    label: '60%',
    value: 60
  },
  {
    label: '70%',
    value: 70
  }, {
    label: '80%',
    value: 80
  },
  {
    label: '90%',
    value: 90
  },
  {
    label: '100%',
    value: 100
  }
]
function App() {
  return (
    <div >
      <MultiRangeSlider min={0} max={100} step={10} datalist={listItems} />
    </div>
  );
}

export default App;
