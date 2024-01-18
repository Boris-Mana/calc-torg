import PopupWithForm from "../popupWithForm/PopupWithForm";
// import ChildrenRadioInItem from "../Children/ChildrenRadioInItem";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { useState, useContext, useEffect } from "react";

export default function EditProfilePopup({ ...props }) {
  // const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('Борис');
  // currentUser.name
  const [description, setDescription] = useState('пельмень');
  // currentUser.about

  // useEffect(() => {
  //   setName(currentUser.name);
  //   setDescription(currentUser.about);
  // }, [currentUser]);

  
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // onUpdateUser({
    //   name: name,
    //   about: description,
    // });
  }

  const propsProflEditPopup = {
    title: "Редактировать профиль",
    name: "profile-edit",
    children: (
      <fieldset className="form__user-info">
        <input
          className="form__input form__input_name"
          type="text"
          name="name"
          placeholder="Имя пользователя"
          minLength="2"
          maxLength="40"
          required
          id="user-name"
          value={name}
          onChange={handleNameChange}
        />
        <span className="form__input-error" id="user-name-error"></span>
        <input
          className="form__input form__input_profession"
          type="text"
          name="value"
          placeholder="профессия"
          minLength="2"
          maxLength="200"
          required
          id="profession"
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="form__input-error" id="profession-error"></span>
      </fieldset>
    ),
  };

  return (
    props.isOpen && (
      <PopupWithForm
        title={propsProflEditPopup.title}
        name={propsProflEditPopup.name}
        btnText="Сохранить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        children={propsProflEditPopup.children}
        onSubmit={handleSubmit}
      />
    )
  );
}
