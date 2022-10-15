import { Component } from 'react';
import { Container } from './PaymentWidget.styled';

import { PameymentMetods } from 'components/PaymentMetod/PaymentMetod';

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };
  selectPaymentMethod = method => () => {
    this.setState({
      selectedMethod: method,
    });
  };
  render() {
    const { selectedMethod } = this.state;
    return (
      <Container>
        <PameymentMetods />
      </Container>
    );
  }
}
