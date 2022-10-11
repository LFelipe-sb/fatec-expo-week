import Check from '../../Images/icon-check.png';
import { Link } from 'react-router-dom';

import './style.css';

function Index(props) {

    return (
        <div className='cointaner-table'>
            <section>
                <h3>{props.title}</h3>
                <h3>{props.title2}</h3>
            </section>
            <table className='table'>
                <thead>
                    <th className='colum1'><img src={Check} /></th>
                    <th>{props.colum2}</th>
                    <th>{props.colum3}</th>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                    <tr>
                        <td><input type='checkbox' id='cpf/ra' value='cpf/ra' className='checkbox-table' /></td>
                        <td>374.000.698-00</td>
                        <td>Laiza Sena</td>
                    </tr>
                </tbody>
            </table>
            <button className='buttons-table'>Salvar</button>
            <Link to='/'><button className='buttons-table'>Cancelar</button></Link>
        </div>
    )
}

export default Index