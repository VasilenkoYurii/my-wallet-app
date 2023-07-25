import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { JsonRpcSigner } from "@ethersproject/providers";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [signer, setSigner] = useState<JsonRpcSigner | undefined>();

  return (
    <>
      <Header signer={signer} setSigner={setSigner} />
      <Main signer={signer} />
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
