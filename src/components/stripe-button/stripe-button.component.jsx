import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HDQ8hBnyCZSOrwiy1Ggs0DwMHQO2mlTBjwGVfXH6jS2Kr8MJ4NccFbsZcfKMV4j07TXlO7ZVH7M9jucgFv0vDhr002EdQLciC'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='HESSUN verkkokauppa'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}€`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );

};

export default StripeCheckoutButton;