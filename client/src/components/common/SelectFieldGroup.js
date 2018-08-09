import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SelectFieldGroup = ({
  name,
  value,
  onChange,
  label,
  error,
  info,
  disabled,
  options
}) => {

  return (
    <div className="form-group col-sm-12">
      <select
        className={classnames("form-control form-control-lg", {
        "is-invalid": error
        })}
        onChange={onChange}
        disabled={disabled}
        name={name}
        value={value}
      >
      {
        options.map(option =>
          <option key={option.label} value={option.value}>
            { option.label }
          </option>
        )
      }
      </select>
      { info && <small className="form-text text-muted">{info}</small> }
      { error && <span className="invalid-feedback">{error}</span> }
    </div>
  );
}

SelectFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  info: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default SelectFieldGroup;
