export interface InterfaceClient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: string;
  balance: number;
  isActive?: boolean;
  additionalInfo?: object;
  familiyMember?: string[];
}
