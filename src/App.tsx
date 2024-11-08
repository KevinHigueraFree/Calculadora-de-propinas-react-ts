import { Fragment, useEffect, useReducer } from 'react';
import { menuItems } from './data/db';
import MenuItem from './components/MenuItem';
import OrderTotals from './components/OrderTotals';
import OrderContents from './components/OrderContents';
import TipPorcentajeForm from './components/TipPorcentajeForm';

import { initialState, orderReducer } from './reducers/order-reducer';


function App() {


  const [state, dispatch] = useReducer(orderReducer, initialState);


  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(state.order))
  }, [state.order])

  return (
    <Fragment>
      <header className="bg-teal-500 py-10" >
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>


      </header >
      <main className="max-w-7xl mx-auto py-20 px-10 grid md:grid-cols-2 justify-items-center">
        <div className="p-5 w-full">
          <h2 className='text-4xl font-black' >Menú</h2>
          <div className='space-y-2'>

            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className='w-full'>
          <div className="border border-dashed border-slate-300 rounded-lg space-y-10">
            {state.order.length ? (
              <Fragment>

                <OrderContents
                  order={state.order}
                  dispatch={dispatch}
                />
                <TipPorcentajeForm
                  dispatch={dispatch}
                  tip={state.tip}
                />

                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </Fragment>
            ) : (
              <p className='text-center'> Orden vacía</p>
            )}
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default App
