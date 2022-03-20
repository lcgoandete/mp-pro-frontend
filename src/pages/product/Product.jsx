import React, { useEffect, useState } from 'react';
import usePayment from '../../hooks/usePayment';
import Loading from '../../components/loading/loading';
import './product.css';

const payer = {
  name: 'Lalo',
  surname: 'Landa',
  email: 'test_user_92801501@testuser.com',
  phone: {
    areaCode: '55',
    number: 985298743,
  },
  address: {
    publicPlace: 'Insurgentes Sur',
    number: 1602,
    zipCode: '78134-190',
  },
};

const product = {
  id: 1234,
  title: 'PocoPhone F1',
  description: 'Celular de Tienda e-commerce',
  pictureURL: 'https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/c/e/celular-smartphone-pocophone-f1-128gb-6-18-xiaomi_278995_1.jpg',
  quantity: 1,
  unitPrice: 1200.00,
  externalReference: 'lcgoandete@hotmail.com',
};

export default function Product() {
  const { getPayment } = usePayment();
  const [loading, setLoading] = useState(true);
  const [preferenceId, setPreferenceID] = useState('');

  useEffect(() => {
    async function getOrder() {
      setLoading(true);
      const responsePayment = await getPayment(payer, product);
      setLoading(false);
      setPreferenceID(responsePayment);
      // window.location.href = responsePayment.init_point;
    }
    getOrder();
  }, []);

  useEffect(() => {
    if (preferenceId !== '') {
      const mercadopagoButton = document.querySelector('.mercadopago-button');
      if (mercadopagoButton) {
        mercadopagoButton.parentNode.removeChild(mercadopagoButton);
      }

      const script = document.createElement('script');
      // eslint-disable-next-line no-undef
      const mp = new MercadoPago('APP_USR-6096a634-0b35-452c-94c9-a18adb8ffb15', { locale: 'pt-BR' });
      mp.checkout({
        preference: {
          id: preferenceId,
        },
        render: {
          container: '.cho-container',
          label: 'Pague a compra',
        },
      });
      document.body.appendChild(script);
    }
  }, [preferenceId]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card mt-3 px-1 cardWidth">
        <img src={product.pictureURL} className="card-img-top mt-2" alt="imagem do pocophone f1" />
        <div className="card-body">
          <h5 className="card-title">{ product.title }</h5>
          <p className="card-text">{ product.description }</p>
          <p className="card-text">
            {product.unitPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="card-text">{`Qtd: ${product.quantity}` }</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Nome</span>
          <input className="form-control" type="text" name="name" id="name" defaultValue={payer.name} />
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Sobrenome</span>
          <input className="form-control" type="text" name="surname" id="surname" defaultValue={payer.surname} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">E-mail</span>
          <input className="form-control" type="text" name="email" id="email" defaultValue={payer.email} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Código de Area</span>
          <input className="form-control" type="text" name="phone-areaCode" id="phone-areaCode" defaultValue={payer.phone.areaCode} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Telefone</span>
          <input className="form-control" type="number" name="phone-number" id="phone-number" defaultValue={payer.phone.number} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Logradouro</span>
          <input className="form-control" type="text" name="address-publicPlace" id="address-publicPlace" defaultValue={payer.address.publicPlace} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Número</span>
          <input className="form-control" type="number" name="address-number" id="address-number" defaultValue={payer.address.number} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Cep</span>
          <input className="form-control" type="text" name="address-zipCode" id="address-zipCode" defaultValue={payer.address.zipCode} />
        </div>
      </div>

      <div className="text-center my-4">
        <div className="cho-container" />
        { loading && <Loading /> }
      </div>
    </div>
  );
}
