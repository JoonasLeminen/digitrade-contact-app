export class Contact {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    streetAddress: string;
    postalCode: string;
    city: string;
    id: string;

  constructor(firstName?: string, lastName?: string, phone?: string, email?: string,
              streetAddress?: string, postalCode?: string, city?: string, id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.streetAddress = streetAddress;
    this.postalCode = postalCode;
    this.city = city;
    this.id = id;
  }
}

