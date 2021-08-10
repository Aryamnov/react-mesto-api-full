import success from "../images/Success.svg";
import error from "../images/Error.svg";

function InfoTooltip(props) {
  return (
    <div className={`info-tool ${props.isOpen ? `info-tool_opened` : ``}`}>
      <div className="info-tool__container">
        <button className="info-tool__close" onClick={props.onClose} />
        <img
          src={`${props.status ? success : error}`}
          alt="иконка статуса операции"
          className="info-tool__image"
        />
        <p className="info-tool__paragraph">{`${
          props.status
            ? `Вы успешно зарегистрировались!`
            : `Что-то пошло не так! Попробуйте ещё раз.`
        }`}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
