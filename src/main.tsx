import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import MoviesProviderWrapper from "./context/MoviesProviderWrapper.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesProviderWrapper from "./context/MoviesProviderWrapper.tsx";
// import CounterProvider from "./context/CounterContext.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MoviesProviderWrapper>
        {/* <CounterProvider> */}
        <App />
        {/* </CounterProvider> */}
      </MoviesProviderWrapper>
    </QueryClientProvider>
  </React.StrictMode>
);
