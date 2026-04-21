import { PrintReports } from "../../../common/constants/strings.constants";

export interface AssignedOrderLine {
  id: number;
  location: string | null;
  zone?: string | null;
}