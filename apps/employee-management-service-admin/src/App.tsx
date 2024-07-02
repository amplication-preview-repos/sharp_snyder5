import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { PromotionList } from "./promotion/PromotionList";
import { PromotionCreate } from "./promotion/PromotionCreate";
import { PromotionEdit } from "./promotion/PromotionEdit";
import { PromotionShow } from "./promotion/PromotionShow";
import { TransferList } from "./transfer/TransferList";
import { TransferCreate } from "./transfer/TransferCreate";
import { TransferEdit } from "./transfer/TransferEdit";
import { TransferShow } from "./transfer/TransferShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EmployeeManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Promotion"
          list={PromotionList}
          edit={PromotionEdit}
          create={PromotionCreate}
          show={PromotionShow}
        />
        <Resource
          name="Transfer"
          list={TransferList}
          edit={TransferEdit}
          create={TransferCreate}
          show={TransferShow}
        />
      </Admin>
    </div>
  );
};

export default App;
