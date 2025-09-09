import { Layout } from "../components/Layout";

export default function ProductManagement() {

  return (
    <Layout currentWebPage="Product Management" style="items-center">
      {/*Dito lagay yung page layout*/}
      <div className="flex w-1/1  justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center m-6 ">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            📊 ProductManagement Page
          </h1>
        </div>
      </div>
    </Layout>

  );
}
