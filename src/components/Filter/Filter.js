import PropTypes from "prop-types";
import style from "./Filter.module.css";

function Filter({ value, onChange }) {
  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
