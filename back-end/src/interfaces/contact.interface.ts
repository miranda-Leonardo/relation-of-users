interface iContactRequest {
  contact_userId: string;
}

interface iContactResponse extends iContactRequest {
  id: string;
}

export { iContactRequest, iContactResponse };
