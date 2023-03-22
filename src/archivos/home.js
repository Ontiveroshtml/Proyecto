import Table from 'react-bootstrap/Table';

function Home() {
    return (
        <Table striped bordered hover size="lg">
            <thead>

                <th>Método render</th>
                <th>Método strict mode</th>
                <th>Método Return</th>


            </thead>
            <tbody>

                <td>Todo componente de React, tiene un método
                    render que es el que se encarga de renderizar en el navegador
                    el HTML correspondiente al componene. Este método se llama automaticamente
                    cuando se crea un componente y cuando el estado del componente se actualiza
                    (veremos esto más adelante)</td>
                <td>SrtricMode es una herramienta para destacar problemas
                    potenciales en la aplcacoón. Al igual que Fragment,
                    Stricmode no renderiza nada en la interfaz de usuario. Este
                    modo también activa advertencias y comprobaciones adicionales para sus
                    descendientes</td>
                <td>Este método es obligatorio en cualquier componente. pues como su nombre lo dice,
                    se utiliza para obtener los elementos finales visualizar o pintar en el navegador.
                    debe ser una funcion pura. es decir, no debe modificar las props, no debe modificar el state
                    ni realiar operaciones del dom</td>

            </tbody>
        </Table>
    );
}

export default Home;