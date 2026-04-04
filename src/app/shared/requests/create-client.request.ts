export interface CreateClientRequest {
  firstName: string;
  lastName: string;
  phonenumber: string;
  shippingFrom: string;
  shippingTo: string;
  comment?: string;
}
