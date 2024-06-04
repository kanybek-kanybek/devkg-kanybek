import React from 'react';
import PropTypes from 'prop-types';
import './vacancy.css';

function Vacancy({ logo, company, office, salary, jobType }) {
  return (
    <div className="vacancy">
      <div className="vacancy__item vacancy__item--logo">
        {logo ? <img src={logo} alt={`${company} logo`} className="vacancy__logo" /> : <div className="vacancy__logo-placeholder">Logo</div>}
      </div>
      <div className="vacancy__item">
        <b className="vacancy__title">Компания</b>
        <b className="vacancy__name">{company}</b>
      </div>
      <div className="vacancy__item">
        <b className="vacancy__title">Должность</b>
        <b className="vacancy__office">{office}</b>
      </div>
      <div className="vacancy__item">
        <b className="vacancy__title">Оклад</b>
        <b className="vacancy__salary">{salary}</b>
      </div>
      <div className="vacancy__item">
        <b className="vacancy__title">Тип</b>
        <b className="vacancy__type">{jobType}</b>
      </div>
    </div>
  );
}

Vacancy.propTypes = {
  logo: PropTypes.string,
  company: PropTypes.string.isRequired,
  office: PropTypes.string.isRequired,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  jobType: PropTypes.string.isRequired,
};

Vacancy.defaultProps = {
  logo: '',
};

export default Vacancy;
