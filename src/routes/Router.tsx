import { Routes, Route } from "react-router-dom";
import {
  CustomerConsent,
  CustomerQuote,
  CustomerContactDetails,
  HomeOrRent,
  Matches,
  Welcome,
} from "../pages";
import ROUTES from "./constants";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.WELCOME} element={<Welcome />} />
      <Route path={ROUTES.CUSTOMER_QUOTE} element={<CustomerQuote />} />
      <Route path={ROUTES.HOME_OR_RENT} element={<HomeOrRent />} />
      <Route path={ROUTES.CUSTOMER_CONTACT_DETAILS} element={<CustomerContactDetails />} />
      <Route path={ROUTES.CUSTOMER_CONSENT} element={<CustomerConsent />} />
      <Route path={ROUTES.MATCHES} element={<Matches />} />
    </Routes>
  );
}
