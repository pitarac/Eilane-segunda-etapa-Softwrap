function Form() {
  return (
    <div>
      <h2 className='text-2xl'>Fomulário de Cadastro</h2>
      <form>
        <div className='flex'>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              Nome Completo
            </label>
            <input
              className='border border-gray-400 outline-none p-2 rounded-md'
              type='text'
              name='nome'
              placeholder='Nome completo'
            />
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              Idade
            </label>
            <input
              className='border border-gray-400 outline-none p-2 rounded-md'
              type='number'
              name='idade'
              placeholder='Idade'
            />
          </div>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              Estado Civil
            </label>
            <select
              name='estado_civil'
              className='border border-gray-400 outline-none p-2 rounded-md'>
              <option value='casado' key=''>
                Casado
              </option>
              <option value='solteiro' key=''>
                Solteiro
              </option>
              <option value='divorciado' key=''>
                Divorciado
              </option>
              <option value='viúvo' key=''>
                Viúvo
              </option>
            </select>
          </div>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              CPF
            </label>
            <input
              className='border border-gray-400 outline-none p-2 rounded-md'
              type='text'
              name='cpf'
              placeholder='CPF'
            />
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              Cidade
            </label>
            <input
              className='border border-gray-400 outline-none p-2 rounded-md'
              type='text'
              name='cidade'
              placeholder='Cidade'
            />
          </div>
          <div className='flex flex-col mb-2 p-4 grow'>
            <label className='mb-2' for='nome'>
              Estado
            </label>
            <input
              className='border border-gray-400 outline-none p-2 rounded-md'
              type='text'
              name='estado'
              placeholder='Estado'
            />
          </div>
        </div>
        <div className='flex justify-end p-4'>
          <button
            type='submit'
            className='bg-green-700 text-white font-semibold p-4 rounded-lg min-w-'>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
