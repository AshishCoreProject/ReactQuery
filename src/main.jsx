import React from "react";
import ReactDOM from "react-dom/client"; // Corrected import
import App from "./App"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {retry:5, retryDelay:1000}
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App/>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </React.StrictMode>
);