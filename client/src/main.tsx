import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./store.ts";
import {ConfigProvider, theme} from "antd";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
          <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
              <App />
          </ConfigProvider>
      </Provider>
  </StrictMode>,
)
