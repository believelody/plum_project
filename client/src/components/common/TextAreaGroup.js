import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaGroup = ({
  name,
  placeholder,
  value,
  onChange,
  label,
  error,
  info,
  disabled,
  ...rest
}) => {
  return (
    <div className="form-group col-sm-12">
      <textarea
        className={classnames("form-control form-control-lg", {
        "is-invalid": error
        })}
        onChange={onChange}
        value={value}
        disabled={disabled}
        placeholder={placeholder} name={name}
        {...rest}
      >
      </textarea>
      { info && <small className="form-text text-muted">{info}</small> }
      { error && <span className="invalid-feedback">{error}</span> }
    </div>
  );
}

TextAreaGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaGroup;
