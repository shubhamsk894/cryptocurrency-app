import React, { useState } from "react";

import Header from "./views/header";
import Currencies from "./views/currencies";
import Results from "./views/results/results";
import { fetchRates } from "./services/conversionData";

let conversionData = fetchRates();

const App = () => {
  const [currency, setCurrency] = useState("");
  const [cryptoCurrency, setCryptoCurrency] = useState("");
  const [loader, setLoader] = useState(false);

  const currencyProps = {
    currHandler: e => setCurrency(e.target.value),
    currValue: currency,
    cryptoHandler: e => setCryptoCurrency(e.target.value),
    cryptoValue: cryptoCurrency,
    handleRateButton: () => {
      // setLoader(!loader);
      console.log(conversionData.rate.read());
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="currency">
        <Currencies {...currencyProps} />
      </div>
      {/* <Results isLoading={loader} /> */}
    </div>
  );
};

export default App;
