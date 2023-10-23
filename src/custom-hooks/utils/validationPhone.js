export const validationPhone = (phone) => {
  if (/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/g.test(phone)) {
    return true;
  }
  return false;
};
