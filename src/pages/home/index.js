import Table from "../../components/Table";

function Home({ columns, data }) {
  return (
    <div>
      <h2 className='text-2xl'>Tabela de usuários</h2>
      <Table columns={columns} data={data} />
    </div>
  );
}
export default Home;
