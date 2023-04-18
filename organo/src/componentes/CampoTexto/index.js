import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeHolderModificada = `${props.placeholder}...`;

  return (
    <div className="campo-texto">
      <label for="">{props.label}</label>
      <input
        type="text"
        required={props.obrigatorio}
        placeholder={placeHolderModificada}
      />
    </div>
  );
};

export default CampoTexto;
