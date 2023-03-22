import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <center><div>
      <hr /><form onSubmit={presion}>
        <p>Cuantas pitusas desea comprar? </p><input class="button2" type="number" name="articulo1" />
        <hr />
        <p>Cuantos balbo desea comprar? </p><input class="button2" type="number" name="articulo2" />
        <hr />
        <p>
          <input class="button" type="submit" value="Calcular" />

        </p>
        <hr />
      </form>
    </div></center>
  );
}
function presion(e) {
  e.preventDefault();
  const a1=parseInt(e.target.articulo1.value, 10);
  const a2=parseInt(e.target.articulo2.value, 10);
  const articulo=a1+a2;
  alert('La cantidad de articulos comprados son: '+articulo);
}


export default App;