import GlobalStyle from './styles/global'
import NavbarDawer from "./components/NavbarDrawer/NavbarDrawer"
import AtivarDesativarEmpresas from "./Pages/AtivarDesativarEmpresas"

function App() {
   return (
      <div className="App">
         <GlobalStyle />
         <NavbarDawer />
         <AtivarDesativarEmpresas/>
         
         
      </div>
      
   )
   
}

export default App
