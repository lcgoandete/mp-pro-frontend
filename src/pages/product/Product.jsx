import React, { useState } from 'react';
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
  description: 'Telefone Celular Xiaomi',
  pictureURL: 'https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/c/e/celular-smartphone-pocophone-f1-128gb-6-18-xiaomi_278995_1.jpg',
  quantity: 1,
  unitPrice: 1200.00,
  externalReference: 'lcgoandete123@hotmail.com',
};

export default function Product() {
  const { getPayment } = usePayment();
  const [loading, setLoading] = useState(false);

  async function getOrder() {
    setLoading(true);
    const responsePayment = await getPayment(payer, product);
    setLoading(false);
    window.location.href = responsePayment.init_point;
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
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.name} />
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Sobrenome</span>
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.surname} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">E-mail</span>
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.email} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Código de Area</span>
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.phone.areaCode} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Telefone</span>
          <input className="form-control" type="number" name="fullName" id="full-name" defaultValue={payer.phone.number} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Logradouro</span>
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.address.publicPlace} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Número</span>
          <input className="form-control" type="number" name="fullName" id="full-name" defaultValue={payer.address.number} />
        </div>
      </div>

      <div className="text-center">
        <div className="mt-3 px-1 input-group mb-3">
          <span className="input-group-text">Cep</span>
          <input className="form-control" type="text" name="fullName" id="full-name" defaultValue={payer.address.zipCode} />
        </div>
      </div>

      <div className="text-center my-4">
        <button
          className="btn btn-lg btn-primary"
          type="button"
          onClick={getOrder}
        >
          Fazer Pedido
        </button>
        { loading && <Loading /> }
      </div>

    </div>
  );
}
