import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import MainRoutesProvider from "./Routes";
import Container from "./UI/Container/Container";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Provider store={store}>
         <Header />
         <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
         >
            <Container>
               <MainRoutesProvider />
            </Container>
            <Footer />
         </div>
      </Provider>
   </BrowserRouter>
);
