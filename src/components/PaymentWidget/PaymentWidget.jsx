import { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { FaCcVisa, FaCcMastercard, FaCcApplePay } from 'react-icons/fa';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => {
    v;
    this.setState({
      selectedMethod: method,
    });
  };

  render() {
    // const { selectedMethod } = this.state;

    return (
      <Container>
        <Button onClick={() => this.selectPaymentMethod('mastercard')}>
          <FaCcMastercard size={24} /> Mastercard
        </Button>
        <Button onClick={() => this.selectPaymentMethod('viza')}>
          <FaCcVisa size={24} />
          Visa
        </Button>
        <Button onClick={() => this.selectPaymentMethod('applepay')}>
          <FaCcApplePay size={24} />
          Applepay{' '}
        </Button>
      </Container>
    );
  }
}
