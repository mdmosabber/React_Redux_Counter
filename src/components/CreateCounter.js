import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setCustom } from '../redux/state/counter/counterSlice';

const CreateCounter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const numberValue = useRef();

    return (

    <div className='card'>
        <div className='card-header'>
            <h3 className='text-center'>Counter App</h3>
        </div>
        <div className='card-body'>
            <h2 className='text-center'> {count} </h2>
            <div className='d-flex justify-content-center'>
                <Button onClick={()=> dispatch(increment())} className='btn btn-success mx-2'>Increment</Button>
                <Button onClick={()=> dispatch(decrement())} className='btn btn-warning mx-2'>Decrement</Button>
            </div>
            <div className='d-flex justify-content-center mt-3'>
                <input ref={numberValue} type="text" className="form-control" />
                <button onClick={()=> dispatch(setCustom(Number(numberValue.current.value)))} className='form-control btn btn-success ms-2 w-25'> Set Value</button>
            </div>
        </div>
    </div>


    )
}

export default CreateCounter