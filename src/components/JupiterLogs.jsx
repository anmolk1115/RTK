import React from 'react';
// import './jupiter.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Jupiter = () => {
    // const [fuelPrice, setFuelPrice] = React.useState('');
    // const [fuelQuantity, setFuelQuantity] = React.useState('');
    const [showStatement, setShowStatement] = React.useState(false);
    const [formData, setFormData] = React.useState({
        quantity: '',
        price: '',
        kilometre: '',
        errors: {},
    })
    const containerClass = 'jupiter';

    const validateForm = () => {
        const errors = {};
        const { quantity, price, kilometre } = formData;
        if(!quantity) {
            errors.quantity = 'quantity is required';
            // setFormData(prevState => ({...prevState, errors}));
        }

        if(!price) {
            errors.price = 'price is required';
        }

        if(!kilometre) {
            errors.kilometre = 'kilometer is required';
        }

        setFormData(prevState => ({...prevState, errors}));

        return Object.keys(errors).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(validateForm()) {
            setShowStatement(true);
        }
        console.log('formData', e);
    };

    const formDisabled = () => {
        const { quantity, price, kilometre } = formData;
        return Boolean(quantity && price && kilometre);
    }

    const onChange = (e) => {
        // console.log('onchange', e);
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    };

    const getErrorMessage = (field) => {
        const { quantity: quantityError, price: priceError, kilometre: kilometreError} = formData.errors;

        switch (field) {
            case 'quantity': return (<div className='font-10 text-danger'>{quantityError}</div>);
            case 'price': return (<div className='font-10 text-danger'>{priceError}</div>);
            case 'kilometre': return (<div className='font-10 text-danger'>{kilometreError}</div>);
            default: return (<div className='font-10'>{'no error'}</div>);
        }
        
    };

    const getFuelStatementLayout = () => {
        console.log('formDisabled', formDisabled());
        const { quantity: quantityError, price: priceError, kilometre: kilometreError} = formData.errors;
        return (
            <form onSubmit={onSubmit}>
                <input className='form form-control mb-2' onChange={onChange} name='quantity' type='text' value={formData.quantity} placeholder='Fuel Quantity' />
                {quantityError ? getErrorMessage('quantity') : null}
                <input className='form form-control mb-2' onChange={onChange} name='price' type='text' value={formData.price} placeholder='Fuel Price' />
                {priceError ? getErrorMessage('price') : null}
                <input className='form form-control mb-2' onChange={onChange} name='kilometre' type='text' value={formData.kilometre} placeholder='Kilometer' />
                {kilometreError ? getErrorMessage('kilometre') : null}
                <div className='d-flex justify-content-evenly'>
                    <input type='submit' className='btn btn-success cursor-pointer' value={'Get statement'} />
                    <button className='btn btn-warning cursor-pointer' onClick={resetState}>Clear</button>
                </div>
            </form>
        );
    };

    const resetState = () => {
        setShowStatement(false);
        setFormData({
            quantity: '',
            price: '',
            kilometre: '',
            errors: {},
        });
    };

    return (
        <div className={`${containerClass}-container`} style={{maxWidth: '400px', margin: 'auto'}}>
            <h2 className='text-center'>Jupiter Fuel Log</h2>
            {getFuelStatementLayout()}
            {/* 3.04Ltr Rs 310 on 18398KM */}
            {showStatement ? <div className='text-center mt-2'>{`${formData.quantity}Ltr Rs ${formData.price} on ${formData.kilometre}KM`}&nbsp;<button className='font-10 btn btn-info' onClick={() => {navigator.clipboard.writeText(`${formData.quantity}Ltr Rs ${formData.price} on ${formData.kilometre}KM`)}}>Copy</button></div> : null}
        </div>
    )
};

export default Jupiter;