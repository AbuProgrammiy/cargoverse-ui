export interface GetAllClientsRequest {
  first?: number;
  rows?: number;
  firstName?: string;
  lastName?: string;
  phonenumber?: string;
  shippingFrom?: string;
  shippingTo?: string;
  comment?: string;
}
