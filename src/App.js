import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LogInTheatres from "./components/LogInTheatres/LogInTheatres";
import LogInViewer from "./components/LogInViewer/LogInViewer";
import Home from "./components/Home/Home";
import FormViewers from "./components/Forms/FormViewers.js";
import FormShow from "./components/Forms/FormShow";
import HomeTheater from "./components/HomeTheater/HomeTheater";
import FormTheater from "./components/Forms/FormTheater";
import EditProfileTheater from "./components/Forms/EditProfileTheater";
import HomeViewer from "./components/HomeViewer/HomeViewer";
// import Checkout from "./components/Checkout/Checkout";
import FormPutViewer from "./components/Forms/FormPutViewer.js";
import { UserContextProvider } from "./context/UserContext.js";
import ShowDetail from "./components/Shows/ShowDetail.js";
// import PrivateRouteHomeV from "./PrivateRoutes/PrivateRouteHomeV.js";
// import PrivateRouteHomeT from "./PrivateRoutes/PrivateRouteHomeT";
// import PrivateRouteCreateShow from "./PrivateRoutes/PrivateRouteCreateShow.js";
// import PrivateRouteProfileT from "./PrivateRoutes/PrivateRouteProfileT.js";
// import PrivateRoutePutV from "./PrivateRoutes/PrivateRoutePutV";
import Newsletter from "./components/Newsletter/Newsletter";
import SalesHistory from "./components/SalesHistory/SalesHistory";
import ViewerHistory from "./components/ViewerHistory/ViewerHistory";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Seat from "./components/Seats/Seats";
import PasarelaDePago from "./components/PasarelaDePago/PasarelaDePago";
import ShowDetailHome from "./components/Shows/ShowDetailHome";
import PasswordRecoveryViewer from "./components/LogInViewer/PasswordRecoveryViewer";
import PasswordRecoveryTheater from "./components/LogInTheatres/PasswordRecoveryTheater";
import ResetPasswordViewer from "./components/LogInViewer/ResetPasswordViewer";
import ResetPasswordTheater from "./components/LogInTheatres/ResetPasswordTheater";
import ShowDetailTheater from "./components/Shows/ShowDetailTheater";
import Error404 from "./components/Error 404/Error404";
import RedirectCheckout from "./components/RedirectCheckout/RedirectCheckout";
import Footer from "./components/Footer/Footer";
import Ticket from "./components/Ticket/Ticket";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Route exact path="/" component={Home} />
            <Route exact path="/loginteatres" component={LogInTheatres} />
            <Route exact path="/loginviewer" component={LogInViewer} />
            <Route
              exact
              path="/passwordRecoveryViewer"
              component={PasswordRecoveryViewer}
            />
            <Route
              exact
              path="/passwordRecoveryTheater"
              component={PasswordRecoveryTheater}
            />
            <Route
              exact
              path="/ResetPasswordViewer/:id"
              component={ResetPasswordViewer}
            />
            <Route
              exact
              path="/ResetPasswordTheater/:id"
              component={ResetPasswordTheater}
            />

            <Route exact path="/formViewerRegister" component={FormViewers} />
            <Route exact path="/theaterRegister" component={FormTheater} />
            <Route exact path="/seat" component={Seat} />
            <Route exact path="/pasarela/:id/:idV" component={PasarelaDePago} />
            <Route
              exact
              path="/editProfileTheater/:id"
              component={EditProfileTheater}
            />
            <Route exact path="/create/:id" component={FormShow} />
            {/* <Route
              exact
              path="/create/:id"
              component={FormShow}
            /> */}
            <Route exact path="/theaterHome/:id" component={HomeTheater} />
            {/* <Route
              exact
              path="/theaterHome/:id"
              component={HomeTheater}
            /> */}
            <Route exact path="/viewerHome/:id" component={HomeViewer} />
            {/* <Route
              exact
              path="/viewerHome/:id"
              component={HomeViewer}
            /> */}
            <Route exact path="/formPutViewer/:id" component={FormPutViewer} />
            <Route
              exact
              path="/showDetailHome/:idShow"
              component={ShowDetailHome}
            />
            <Route exact path="/showDetail/:id/:idV" component={ShowDetail} />
            <Route exact path="/newsletter/:id" component={Newsletter} />
            <Route exact path="/salesHistory/:id" component={SalesHistory} />
            <Route exact path="/viewerHistory/:id" component={ViewerHistory} />
            <Route exact path="/privacyPolicy" component={PrivacyPolicy} />
            <Route
              exact
              path="/termsConditions"
              component={TermsAndConditions}
            />
            {/* <Route exact path="/showDetail/checkout/:id" component={Checkout} /> */}
            <Route exact path="/pasarela/:id" component={PasarelaDePago} />
            <Route
              exact
              path="/showDetailTheater/:id"
              component={ShowDetailTheater}
            />
            <Route exact path="/error404" component={Error404} />
            <Route
              exact
              path="/ticket/finish/:id/:idV/:seatNumber"
              component={RedirectCheckout}
            />
            <Route exact path='/ticket/:id/:idShow' component={Ticket}/>
          </header>
        </div>
      </BrowserRouter>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
