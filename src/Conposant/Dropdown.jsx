
import { useState } from "react";
import arrowTop from '../assets/arrow_top.svg'; 
import "../styles/Dropdown.css";

function RentalDropdown({ equipments, description }) {
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);
  const [isOpenDescription, setIsOpenDescription] = useState(false);

  const toggleDropdown = (dropdownType) => {
    if (dropdownType === 'equipments') {
      setIsOpenEquipments(!isOpenEquipments);
    } else if (dropdownType === 'description') {
      setIsOpenDescription(!isOpenDescription);
    }
  };

  return (
    <div className="dropdown">
      <DropdownItem title="Équipements" isOpen={isOpenEquipments} toggleDropdown={() => toggleDropdown('equipments')}>
        <DropdownText content={equipments} />
      </DropdownItem>
      <DropdownItem title="Description" isOpen={isOpenDescription} toggleDropdown={() => toggleDropdown('description')}>
        <DropdownText content={description} />
      </DropdownItem>
    </div>
  );
}

function DropdownItem({ title, isOpen, toggleDropdown, children }) {
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const dropdownEvent = () => {
    toggleDropdown();
    handleRotate();
  };

  return (
    <div className="dropdown-item_location">
      <div className="dropdown-title_location" onClick={dropdownEvent}>
        <p>{title}</p>
        <img
          src={arrowTop}
          alt="flèche vers le haut"
          className="dropdown-title__image"
          style={{ transform: rotateChevron ? 'rotate(180deg)' : 'rotate(0)', transition: 'all 0.2s linear' }}
        />
      </div>
      {isOpen && children}
    </div>
  );
}

function DropdownText({ content }) {
  return (
    <div className="dropdown-txt_location">
      {Array.isArray(content) ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}

export default RentalDropdown;