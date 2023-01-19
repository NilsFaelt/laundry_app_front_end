import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers, UsersData } from "../../api/getAllUsers";
import { sendMail } from "../../api/sendMail";
import { RootState } from "../../redux/store";
import { MailType } from "../../types/mailTypes";
import { UserTypeWithNestedAdress } from "../../types/userType";
import { shortenDateToString } from "../../utils/shortenDateToString";
import Head from "../Helmet/Head";
import AllMails from "./allMails/AllMails";
import * as styles from "./mailPopUp.style";
import ReadMailPopUp from "./readMailPopUp/ReadMailPopUp";
import ShowFilteredMails from "./showFilteredMails/showFilteredMails";
import { checkIfmaiStartsWithRE } from "./utils/checkIfmaiStartsWithRE";
import { fetchWrapper } from "./utils/fetchWrapper";

interface Props {
  setToogleMailPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const MailPopUp = ({ setToogleMailPopUp }: Props) => {
  const resetMailInfo = {
    from: "",
    to: "",
    text: "",
    date: "",
    subject: "",
    read: false,
  };
  const user = useSelector((state: RootState) => state.userReducer.user);
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setfile] = useState<any>(null);
  const [mailInfo, setMailInfo] = useState<MailType>({
    from: "",
    to: "",
    text: "",
    date: "",
    subject: "",
    read: false,
  });
  const [choosenMail, setChoosenMail] = useState<MailType | null>(null);
  const [mailIsPerfectMatch, setmailIsPerfectMatch] = useState(false);
  const [correctMail, setCorrectMail] = useState(false);
  const [sentSucees, setSentSucees] = useState(false);
  const [to, setTo] = useState("");
  const [allMails, setAllMails] = useState<string[]>([]);
  const [allMailsFiltered, setAllMailsFiltered] = useState<string[]>([]);
  const [toogleMailWriteMail, setToogleMailWriteMail] = useState(false);
  const allUsers = "allUsers@laundry.com";
  const date = shortenDateToString(new Date());

  useEffect(() => {
    fetchWrapper(getAllUsers, setAllMails, setAllMailsFiltered);
  }, []);

  useEffect(() => {
    setAllMailsFiltered(
      allMails.filter((mail) =>
        mail.toLocaleLowerCase().includes(to.toLocaleLowerCase())
      )
    );

    const ifMailIsPerfectMatch = allMails.find(
      (mail) => mail.toLocaleLowerCase() === to.toLocaleLowerCase()
    );
    if (ifMailIsPerfectMatch) {
      setmailIsPerfectMatch(true);
    } else if (!ifMailIsPerfectMatch) {
      setmailIsPerfectMatch(false);
    }
  }, [to]);

  const sendMailOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSentSucees(false);
    if (user?.email)
      setMailInfo({
        from: user?.email,
        to: to,
        text: text,
        date: date.date,
        subject: subject,
        read: false,
      });
    if (!mailIsPerfectMatch) {
      setCorrectMail(true);
    } else if (to !== "") {
      if (user?.email)
        sendMail({
          from: user?.email,
          to: to,
          text: text,
          date: date.date,
          subject: subject,
          read: false,
        });
      setCorrectMail(false);
      setText("");
      setSubject("");
      setTo("");
      setSentSucees(true);
      setMailInfo(resetMailInfo);
      console.log(mailInfo);
    }
  };

  if (sentSucees) {
    setTimeout(() => {
      setSentSucees(false);
    }, 2000);
  }

  checkIfmaiStartsWithRE("RE: test");

  const tooglePenOnClick = () => {
    if (choosenMail !== null) {
      setTo(choosenMail.from);

      if (checkIfmaiStartsWithRE(choosenMail.subject)) {
        setSubject(`${choosenMail.subject}`);
      } else if (!checkIfmaiStartsWithRE(choosenMail.subject)) {
        setSubject(`RE: ${choosenMail.subject}`);
      }
    }
    setToogleMailWriteMail(true);
    setChoosenMail(null);
  };

  const sendToAllOnCLick = () => {
    setTo(allUsers);
  };
  return (
    <styles.Container>
      <Head title='Mail' description='send mail' />
      <styles.Back onClick={() => setToogleMailPopUp(false)} />
      <styles.Pen onClick={() => tooglePenOnClick()} />{" "}
      <styles.Mail onClick={() => setToogleMailWriteMail(false)} />
      <styles.MailContainer>
        {user?.admin && toogleMailWriteMail ? (
          <styles.ClickableText onClick={() => sendToAllOnCLick()}>
            Send to all users?
          </styles.ClickableText>
        ) : null}
        {choosenMail !== null ? (
          <ReadMailPopUp mail={choosenMail} setChoosenMail={setChoosenMail} />
        ) : null}
        {toogleMailWriteMail ? (
          <styles.Form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              sendMailOnClick(e)
            }
          >
            <styles.Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSubject(e.target.value)
              }
              value={subject}
              placeholder='Subject'
              required
            />
            {correctMail ? (
              <styles.LabelWarning>Invalid mail</styles.LabelWarning>
            ) : null}
            <styles.Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTo(e.target.value)
              }
              placeholder='To'
              value={to}
            />
            <styles.TextArea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setText(e.target.value)
              }
              required
              value={text}
              placeholder='Content'
            ></styles.TextArea>
            <styles.Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setfile(e.target.files)
              }
              type={"file"}
            />

            <styles.Btn>Send</styles.Btn>
            <ShowFilteredMails
              allMailsFiltered={allMailsFiltered}
              mailIsPerfectMatch={mailIsPerfectMatch}
              to={to}
              setTo={setTo}
            />
          </styles.Form>
        ) : (
          <AllMails choosenMail={choosenMail} setChoosenMail={setChoosenMail} />
        )}
      </styles.MailContainer>
      {sentSucees ? <styles.SentMail key={Math.random()} /> : null}
    </styles.Container>
  );
};

export default MailPopUp;
