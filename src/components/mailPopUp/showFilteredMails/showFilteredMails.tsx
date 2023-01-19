import * as styles from "../mailPopUp.style";

interface Props {
  allMailsFiltered: string[];
  mailIsPerfectMatch: boolean;
  to: string;
  setTo: React.Dispatch<React.SetStateAction<string>>;
}

const ShowFilteredMails = ({
  allMailsFiltered,
  mailIsPerfectMatch,
  to,
  setTo,
}: Props) => {
  return (
    <>
      {allMailsFiltered.length > 0 && to !== "" && !mailIsPerfectMatch ? (
        <styles.ShowMailAdresses>
          {allMailsFiltered.map((mail) => {
            return (
              <styles.P key={mail} onClick={() => setTo(mail)}>
                {mail}
              </styles.P>
            );
          })}
        </styles.ShowMailAdresses>
      ) : null}
    </>
  );
};

export default ShowFilteredMails;
