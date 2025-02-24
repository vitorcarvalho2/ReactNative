import { StatusBar } from "expo-status-bar";

import ContactsContextProvider from "./store/context/contacts-context";
import Screens from "./screens/Screens";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ContactsContextProvider>
        <Screens />
      </ContactsContextProvider>
    </>
  );
}
