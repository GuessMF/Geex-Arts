import React, {useState} from "react";
import "./modal.scss";
import SignIn from "../LittleComponents/SignIn/SignIn";
import Confirm from "../LittleComponents/Confirm/Confirm";

export default function Modal({modal, setModal}) {
  const [smsSended, setSmsSended] = useState(false);
  console.log(smsSended);

  return (
    <div className="modal">
      {!smsSended && (
        <SignIn modal={modal} setModal={setModal} setSmsSended={setSmsSended} />
      )}
      {smsSended && (
        <Confirm
          modal={modal}
          setModal={setModal}
          setSmsSended={setSmsSended}
        />
      )}
    </div>
  );
}
