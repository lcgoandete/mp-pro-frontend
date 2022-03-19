import axios from 'axios';

export default function payment() {
  async function getPayment(payer, product) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:5000/payment',
        data: { payer, product },
        // url: `http://localhost:5000/payment?payer=${payer}&product=${product}`,
      });
      return response.data;
    } catch (error) {
      return { message: error.message };
    }
  }
  return { getPayment };
}
