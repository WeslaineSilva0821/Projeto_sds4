import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

export default function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text secondary">Percentual de Sucesso/Visitas (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text secondary">Total em Vendas (%)</h5>
            <DonutChart />
          </div>
          <div>
            <h2 className=" text-primary py-3">Total em Vendas"</h2>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}
