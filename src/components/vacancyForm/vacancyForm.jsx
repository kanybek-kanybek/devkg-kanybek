import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./../../pages/addVacancy/addVacancy.css";

function VacancyForm() {
  const [formValues, setFormValues] = useState({
    organization: "",
    office: "",
    telegram: "",
    skype: "",
    email: "",
    phone: "",
    jobType: "",
  });
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form values:", formValues);
    console.log("Description:", description);
  };

  const TextChange = (value) => {
    setDescription(value);
  };

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  ];

  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <form className="form-block" onSubmit={handleSubmit} autoComplete="off">
      <p className="organization">Организация</p>
      <input
        type="text"
        name="organization"
        value={formValues.organization}
        onChange={handleInputChange}
      />
      <p className="office">Должность</p>
      <div className="officeVacancy">
        <input
          type="text"
          name="office"
          value={formValues.office}
          onChange={handleInputChange}
        />

        <p>Например “Junior C# Developer”</p>
      </div>
      <p className="description">Описание вакансии</p>
      <div className="descriptionVacancy">
        <ReactQuill
          theme="snow"
          value={description}
          onChange={TextChange}
          style={{ height: "234px", width: "466px", fontSize: "16px" }}
          modules={modules}
        />
        <p>
          Здесь <strong> необходимо</strong> указать условия труда, требования и
          обязанности. <br />
          Также вы можете указать краткое описание компании, например:
          <br /> <br />
          “В дружный отдел дизайна игровой студии ”Bloody Fun” требуется
          <br />
          проект менеджер со стажем”
        </p>
      </div>
      <br />
      <br />
      <br />
      <p className="contact"> Telegram</p>
      <div className="telegramVacancy">
        {" "}
        <input
          type="text"
          name="telegram"
          value={formValues.telegram}
          onChange={handleInputChange}
        />
        <p>
          {" "}
          <strong>Не обязательно</strong> заполнять все поля для контактов.
          Например если у<br />
          вас нет почты или вы не хотите оставлять свой телеграм, <br />
          <strong>оставьте полей пустым.</strong>
        </p>
      </div>
      <p className="contact"> Skype </p>
      <input
        type="text"
        name="skype"
        value={formValues.skype}
        onChange={handleInputChange}
      />
      <p className="contact"> E-Mail</p>
      <input
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <p className="contact">Телефон </p>
      <input
        type="tel"
        name="phone"
        value={formValues.phone}
        onChange={handleInputChange}
      />
      <p className="contact"> Тип</p>
      <div className="typeVacancy">
        {" "}
        <select
          className="multiselect__content"
          name="jobType"
          value={formValues.jobType}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Выберите тип работы
          </option>
          <option className="multiselect__element" value="office">
            Работа в офисе (только Кыргызстан)
          </option>
          <option className="multiselect__element" value="project">
            Разовая работа (Проект)
          </option>
          <option className="multiselect__element" value="remote">
            Удаленная работа (Remote)
          </option>
          <option className="multiselect__element" value="relocation">
            Переезд (Работа за границей)
          </option>
          <option className="multiselect__element" value="internship">
            Стажировка (только Кыргызстан)
          </option>
        </select>
        <p>
          Обязательное поле в котором вы можете выбрать тип работы для вашей
          вакансии.
        </p>
      </div>
      <div className="form-buttons">
        <button type="submit">Продолжить</button>
        <button type="button">Сохранить</button>
      </div>
    </form>
  );
}

export default VacancyForm;
