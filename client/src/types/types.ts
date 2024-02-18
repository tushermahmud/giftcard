export type User = {
  id: number;
  role: string;
  email: string;
  username: string;
  password: string;
};

export enum UserType {
  ADMIN = "admin",
  USER = "user",
}

export type Question = {
  id: number;
  question: string;
  answer: string;
  options: string[];
};

export type Answer = {
  questionId: number;
  answer: string;
};

export type CatalogueItem = {
  cardItemId: string;
  id: string;
  name: string;
  cardFaceImage: string;
  giftCardInformation: string;
  value: number;
};

export type Order = {
    customerName: string,
    firstName: string,
    lastName: string,
    referenceNo: string,
    deliveryChannel: string,
    contactNumber: string,
    smsMobileNumber: string,
    emailAddress: string,
    additionalParameters: Record<string, never>,
    countryCode: string,
    languageCode: string,
    orderDate: string,
    lineItems: CatalogueItem[]
  }
