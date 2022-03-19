import axios from 'axios';

export default function payment() {
  async function getPayment(payer, product) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://mp-pro-frontend.herokuapp.com/payment',
        data: { payer, product },
      });
      return response.data;
    } catch (error) {
      return { message: error.message };
    }
  }
  return { getPayment };
}
