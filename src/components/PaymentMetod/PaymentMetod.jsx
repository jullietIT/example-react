import { Component } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { Container, Button } from './PaymentMetod.styled.js';

const methods = Object.freeze({
  //замороженый объект
  mastercard: 'mastercard',
  visa: 'visa',
  applepay: 'applepay',
});

export const PaymentsssMetods = () => {
    return (
        <Container>
            <Button
                selected={selectedMethod === methods.mastercard}
                onClick={this.selectPaymentMethod('mastercard')}
            >
                <FaCcMastercard size={24} /> Mastercard
            </Button>
            <Button
                selected={selectedMethod === methods.visa}
                onClick={this.selectPaymentMethod('visa')}
            >
                <FaCcVisa size={24} />
                Visa
            </Button>
            <Button
                selected={selectedMethod === methods.applepay}
                onClick={this.selectPaymentMethod('applepay')}
            >
                <FaCcApplePay size={24} />
                Applepay{' '}
            </Button>
        </Container>
    );
};
};