import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function Table({data, columns}){
    return(
        <div>
            <table className="table-auto border-collapse mx-auto my-10">
                <thead className="bg-blue-500 text-white">
                    <tr key="" className="text-left">
                        {columns.map((column, index) => 
                            <th  className='p-4 text-center border-2'>{column.heading}</th>
                        )}
                        <th  className='p-4 text-center border-2'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map( (user) => 
                        <tr key="{user.id}" className='border-b'>
                            <td className='p-4 first-letter:uppercase'>{user.nome}</td>
                            <td className='p-4'>{user.idade} Ano{user.idade>1 && 's'}</td>
                            <td className='p-4  first-letter:uppercase'>{user.estado_civil}</td>
                            <td className='p-4'>{user.cpf}</td>
                            <td className='p-4  first-letter:uppercase'>{user.cidade}</td>
                            <td className='p-4 uppercase'>{user.estado}</td>
                            <td className='p-4 text-center flex justify-evenly'>
                                <button className='text-white text-center bg-yellow-400 rounded-md px-4 py-2 mx-1'><FontAwesomeIcon icon={faPenToSquare}/> Editar</button>
                                <button className='text-white text-center bg-red-700 rounded-md px-4 py-2 mx-1'><FontAwesomeIcon icon={faTrashCan}/> Excluir</button>
                            </td>
                        </tr>
                    ) }
                </tbody>
            </table>
        </div>
    )
}

export default Table;
