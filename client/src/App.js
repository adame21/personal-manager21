const { default: Header } = require("./comps/Header");
const { default: DailyMacrosCount } = require('./comps/DailyMacrosCount')

function App() {
  return (
    <div className="App text-center">
      <Header></Header>
      <DailyMacrosCount></DailyMacrosCount>
    </div>
  );
}

export default App;
