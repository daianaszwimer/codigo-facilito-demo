import './menu.css'
import MenuItem from "./menu_item";
function Menu () {
  return (
    // aca vemos codigo repetido, podeos REUTILIZAR ese codigo y crear un nuevo componente: MenuItem
    <div className='menu-wrapper'>
      <nav>
        <ul className='menu'>
          <MenuItem to='/' text='Home'/>
          <MenuItem to='/personajes' text='Personajes'/>
          <MenuItem to='/episodios' text='Episodios'/>
          <MenuItem to='/citas' text='Citas'/>
        </ul>
      </nav>
    </div>
  )
}

export default Menu

// extra: si hay mas tiempo, mostrar que podemos tener un array de objetos y mapearlos en vez de escribir 1 x 1