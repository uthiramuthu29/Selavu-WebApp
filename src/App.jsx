import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IoSearch } from "react-icons/io5";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Bills from "./pages/Bills";
import MyWallets from "./pages/MyWallets";
import Settings from "./pages/Settings";
import Layout from "./components/Layout";
import { TransactionsProvider } from "./context/TransactionProvider";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        handle: { header: { title: "Dashboard" } },
      },
      {
        path: "/transactions",
        element: <Transactions />,
        handle: { header: { title: "Transactions", icon: IoSearch } },
      },
      {
        path: "/bills",
        element: <Bills />,
        handle: { header: { title: "Bills", icon: IoSearch } },
      },
      {
        path: "/wallets",
        element: <MyWallets />,
        handle: { header: { title: "My Wallets" } },
      },
      {
        path: "/settings",
        element: <Settings />,
        handle: { header: { title: "Settings" } },
      },
    ],
  },
]);

function App() {
  return (
    <>
      <TransactionsProvider>
        <RouterProvider router={router} />
      </TransactionsProvider>
    </>
  );
}

export default App;
