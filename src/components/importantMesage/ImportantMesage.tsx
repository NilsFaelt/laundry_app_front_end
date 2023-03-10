import * as styles from "./importantMesage.style";
import { BackgroundContainer } from "../laundryRooms/laundryRooms.style";
import { MainBtn } from "../../styles/globalStyles";
import { Input, Label } from "../laundryRooms/laundryRooms.style";
import { Warning } from "../forum/addThreadPopUp/addThreadPopUp.styles";

import { useState } from "react";
import { addReminder } from "../../api/addReminder";
import DeletePopUp from "./deletePopUp/DeletePopUp";
const ImportantMesage = () => {
  const [toogelDelete, setToogelDelete] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [sucesstMessage, setSucesstMessage] = useState(false);
  const [info, setInfo] = useState({
    text: "",
    title: "",
    from: "",
  });

  const sendOnClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await addReminder(info);
    console.log(data);
    if (data) {
      setAlertMessage(false);
      setInfo({
        text: "",
        title: "",
        from: "",
      });
      setSucesstMessage(true);
    } else {
      setAlertMessage(true);
    }
  };

  return (
    <BackgroundContainer>
      <styles.Container>
        {toogelDelete && <DeletePopUp setToogelDelete={setToogelDelete} />}
        <styles.Remove onClick={() => setToogelDelete(true)}>
          Remove current message?
        </styles.Remove>
        <styles.Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendOnClick(e)}
        >
          <styles.TextArea
            value={info.text}
            name='text'
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            required
            placeholder='Message'
          ></styles.TextArea>
          {alertMessage && <Warning>Couldnt Add Message</Warning>}
          {sucesstMessage && <styles.P>Message added</styles.P>}
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            required
            placeholder='Title'
            name='title'
            value={info.title}
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, [e.target.name]: e.target.value })
            }
            placeholder='From'
            name='from'
            value={info.from}
          />
          <MainBtn>Add</MainBtn>
        </styles.Form>
      </styles.Container>
    </BackgroundContainer>
  );
};

export default ImportantMesage;
