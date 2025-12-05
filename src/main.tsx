import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store/Index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from './components/common/Loader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
   <PersistGate loading={<Loader />} persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
   </Provider>
  </StrictMode>,
)
