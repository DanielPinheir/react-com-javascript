import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  console.log(props.itens);
  return (
    <div className="lista-suspensa">
      <label for="">{props.label}</label>
      <select name="" id="">
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
