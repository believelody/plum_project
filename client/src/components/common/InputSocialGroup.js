import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputSocialGroup = ({
  name,
  placeholder,
  value,
  onChange,
  error,
  type,
  disabled,
  icon,
  ...rest
}) => {
  return (
    <div className="input-group mb-3 col-sm-12 col-md-6">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
      </div>
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
        "is-invalid": error
        })}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        {...rest}
      />
      { error && <span className="invalid-feedback">{error}</span> }
    </div>
  );
}

InputSocialGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

InputSocialGroup.defaultProps = {
  type: "text",
  value: ""
};

export default InputSocialGroup;
