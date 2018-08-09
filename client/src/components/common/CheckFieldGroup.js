import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckFieldGroup = ({
  id,
  checked,
  onChange,
  label,
  error,
  info,
  text,
  disabled,
  colSm,
  colMd
}) => {
  return (
    <div className={`form-check mb-4 ${colSm} ${colMd}`}>
      <input
        type="checkbox"
        className={classnames("form-check-input", {
        "is-invalid": error
        })}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {text}
      </label>
      { info && <small className="form-text text-muted">{info}</small> }
      { error && <span className="invalid-feedback">{error}</span> }
    </div>
  );
}

CheckFieldGroup.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  colSm: PropTypes.string,
  colMd: PropTypes.string
};

CheckFieldGroup.defaultProps = {
  value: false,
  error: ""
};

export default CheckFieldGroup;
