import ChartOne from "./components/ChartOne";
import Table from "./components/Table";
import Logo from './assets/logo.png'


function App() {
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-3 h-auto ">
      <div className="rounded-sm border shadow-md lg:w-2/3 bg-gray-50 md:px-6 md:py-2  relative">
        <div className="absolute w-60  overflow-hidden z-1 opacity-40 top-[45%] left-[45%] pointer-events-none">
          <img src={Logo} className="object-fit  " alt="watermark" />
        </div>
        <ChartOne />
      </div>
      <div className="relative overflow-x-auto shadow-md  w-full lg:w-1/2 rounded-sm border h-65 bg-white">
        <Table />
      </div>
    </div>
  );
}

export default App;
