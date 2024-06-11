
import './App.css'

function NavBar (){
  return (
    <button className="cs-button" data-filter="one">
      New Arrival
    </button>
  );
}

function App() {
 

  return (
    <>
     <section id="collection-1602">
     <div class="cs-container"> </div>
        <div class="cs-content"> </div>
            <h2 class="cs-title">New Collection</h2>
            <div class="cs-button-group"></div>
            <NavBar>New Arrival</NavBar>
            <NavBar>Top Rating</NavBar>
            <NavBar>Best Seller</NavBar>

     </section>
    </>
  )
}

export default App
