/**React */
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**Database*/
import { db } from "./database/firebase-config";
import { collection, getDocs } from "firebase/firestore";

/**Components*/
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewUser from "./pages/NewUser";

function App() {
  const [users, setusers] = useState([]);
  const userCollection = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    console.log(users);
  }, []);

  const columns = [
    { heading: "Nome", value: "nome" },
    { heading: "Idade", value: "idade" },
    { heading: "Estado Civil", value: "estado_civil" },
    { heading: "CPF", value: "cpf" },
    { heading: "Cidade", value: "cidade" },
    { heading: "Estado", value: "estado" },
  ];

  return (
    <div className='sm:w-2/3 mx-auto'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home columns={columns} data={users} />} />
          <Route path='/new' element={<NewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
