import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../auth/signup";
import EmailSign from "../auth/signup/EmailSign";
import PasswordSign from "../auth/signup/PasswordSign";
import GlobalStyle from "src/styles/global";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signup/email" element={<EmailSign />}></Route>
        <Route path="/signup/password" element={<PasswordSign />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
