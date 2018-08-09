import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  info,
  type,
  disabled,
  colSm,
  colMd
}) => {
  return (
    <div className={`form-group ${colSm} ${colMd}`}>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
        "is-invalid": error
        })}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder} name={name}
      />
      { info && <small className="form-text text-muted">{info}</small> }
      { error && <span className="invalid-feedback">{error}</span> }
    </div>
  );
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  colSm: PropTypes.string,
  colMd: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text",
  colSm: "col-sm-12",
  value: ""
};

export default TextFieldGroup;
