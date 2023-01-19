import { MailType } from "./mailTypes";
import { ThreadType } from "./threadTypes";

export interface PaginationInfo {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: ThreadType[];
}
export interface PaginationInfoMail {
  lastIndex: number;
  firstIndex: number;
  roundedPage: number;
  slicedArray: MailType[];
}
