const AddressInfo = ({ address }) => {
    if (!address) return null;
  
    return (
      <div className="address-info">
        <h2>Informações do Endereço</h2>
        <p><strong>CEP:</strong> {address.cep}</p>
        <p><strong>Endereço:</strong> {address.address}</p>
        <p><strong>Bairro:</strong> {address.district}</p>
        <p><strong>Cidade:</strong> {address.city} - {address.state}</p>
        <p><strong>DDD:</strong> {address.ddd}</p>
        <p><strong>Coordenadas:</strong> Lat: {address.lat}, Long: {address.lng}</p>
      </div>
    );
  };
  
  export default AddressInfo;