export const startNewRequestContactPerson = (
  NamePerson,
  LastNamePerson,
  email,
  phone,
  BodyMsg
) => {
  return async (dispatch) => {
    console.log(NamePerson, LastNamePerson, email, phone, BodyMsg);
  };
};

export const startNewRequestContactCompany = (
  NameCompany,
  SectorComercial,
  Tipo,
  SitioWeb,
  email,
  phone,
  BodyMsg
) => {
  return async (dispatch) => {
    console.log(
      NameCompany,
      SectorComercial,
      Tipo,
      SitioWeb,
      email,
      phone,
      BodyMsg
    );
  };
};
