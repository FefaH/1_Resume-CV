
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const Addition = () => {

    const [num, setNum] = useState({
        num1: '',
        num2: ''
    })
    const [result, setResult] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('click')
        if (num.num1 === '' || num.num2 === '') {
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los numeros en los inputs son obligatorios para sumar',
            })
        }
    }
    const handleClick = () => {
        setResult(parseInt(num.num1) + parseInt(num.num2))
    }

    const handleInput = (e) => {
        setNum({
            ...num,
            [e.target.name]: e.target.value
        })
    }

    const handleClear = (e) => {
        setNum({
            num1: 0,
            num2: 0
        })
        setResult('')
    }

    return (
        <div>
            <h1 className="my-5">Sumate unos numeros</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <div className='col-lg-6 mb-2'>
                        <input
                            className="form-control"
                            type="number"
                            name="num1"
                            value={num.num1}
                            onChange={handleInput}
                        />
                    </div>
                    <div className='col-lg-6 mb-2'>
                        <input
                            className="form-control mb-2"
                            type="number"
                            name="num2"
                            value={num.num2}
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className='d-flex '>
                    <div className='d-flex ml-3'>
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={handleClick}
                        >
                            Click
                        </button>
                    </div>

                    {
                        !!result &&
                        <button
                            className="btn btn-primary "
                            type="submit"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    }

                </div>
                <span className='container mt-2'>{result ? result : ''}</span>
            </form>
        </div>
    )
}
