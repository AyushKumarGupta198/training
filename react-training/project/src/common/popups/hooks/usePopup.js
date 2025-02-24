import { useState } from "react";

function usePopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [popupTitle, setPopupTitle] = useState("");
    const [popupContent, setPopupContent] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    const openPopup = (title, content) => {
        setPopupTitle(title);
        setPopupContent(content);
        setIsOpen(true);
    };

    return { isOpen, popupTitle, popupContent, openPopup, togglePopup, closePopup };
}

export default usePopup;