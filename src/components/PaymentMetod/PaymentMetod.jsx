import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';
import { Container, Button } from './PaymentMetod.styled.js';
import { paymentMethods } from 'constants';

export const PaymentMethods = ({ selected, onSelect }) => {
  return (
    <Container>
      <Button
        selected={selected === paymentMethods.mastercard}
        onClick={() => onSelect(paymentMethods.mastercard)}
      >
        <FaCcMastercard size={24} /> Mastercard
      </Button>
      <Button
        selected={selected === paymentMethods.visa}
        onClick={() => onSelect(paymentMethods.visa)}
      >
        <FaCcVisa size={24} /> Visa
      </Button>
      <Button
        selected={selected === paymentMethods.applepay}
        onClick={() => onSelect(paymentMethods.applepay)}
      >
        <FaCcApplePay size={24} /> Apple Pay
      </Button>
    </Container>
  );
};
